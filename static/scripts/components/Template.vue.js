import Alert from './Alert.vue.js';

export default {
	name: 'Template',
	i18n: {
		messages: {
			en: {
				title: 'Base64 Encoder and Decoder',
				logoAlt: 'Logo image',
				decodeAction: 'From Base64',
				encodeAction: 'To Base64',
				copy: 'Copy',
				save: 'Save',
				paste: 'Paste',
				permalink: 'Permalink',
				inputPlaceholder: 'Type text or Base64 content here',
				outputPlaceholder: 'Output will appear here',
				invalidInput: '(Error: Input was not a valid Base64 string)',
				permalinkSuccess: 'Copied permalink to clipboard',
				copySuccess: 'Copied output to clipboard',
				copyFail: 'Could not access clipboard',
				pasteFail: 'Could not access clipboard',
				seeInput: 'Scroll to input',
				seeOutput: 'Scroll to output',
			},
		}
	},
	components: {
		'alert': Alert,
	},
	data () {
		return {
			queryParameters: {
				MODE: 'mode',
				INPUT: 'q'
			},
			modes: {
				ENCODE: 'encode',
				DECODE: 'decode'
			},
			alerts: {
				copySuccess: { type: 'success', message: this.$t('copySuccess') },
				permalinkSuccess: { type: 'success', message: this.$t('permalinkSuccess') },
				copyFail: { type: 'danger', message: this.$t('copyFail') },
				pasteFail: { type: 'danger', message: this.$t('pasteFail') },
			},
			data: {
				input: null,
				output: null,
			},
			states: {
				codecMode: 'decode',
				hasClipboard: false,
			}

		}
	},
	created() {
		if (typeof(navigator.clipboard) == 'object') {
			this.states.hasClipboard = true;
		}
	},
	mounted() {
		this.data.output = null;
		if (this.queryParameters.MODE in this.$route.query) {
			this.setCodec(this.$route.query[this.queryParameters.MODE]);
		}
		if (this.queryParameters.INPUT in this.$route.query) {
			this.setInput(this.$route.query[this.queryParameters.INPUT]);
		}

	},
	methods: {
		setCodec(mode) {
			if ((mode == this.modes.ENCODE) || (mode == this.modes.DECODE)) {
				this.states.codecMode = mode;
			}
			this.inputChanged();
		},
		setInput(text) {
			this.data.input = text;
			this.inputChanged();
		},
		setEncodeMode() {
			this.states.codecMode = this.modes.ENCODE;
			this.inputChanged();
		},
		setDecodeMode() {
			this.states.codecMode = this.modes.DECODE;
			this.inputChanged();
		},
		encode() {
			console.log("encoding: " + this.data.input);
			if ((this.data.input == null) || (this.data.input == '')) {
				this.data.output = null;
			} else {
				this.data.output = btoa(this.data.input);
			}
		},
		decode() {
			try {
				if ((this.data.input == null) || (this.data.input == '')) {
					this.data.output = null;
				} else {
					this.data.output = atob(this.data.input);
				}
			} catch (exception) {
				this.data.output = this.$t('invalidInput');
			}
		},
		handleInputKeystroke(event) {
			this.data.input = event.target.innerText;
			this.inputChanged();
		},
		inputChanged(event) {
			console.log(event);
			if (this.states.codecMode == this.modes.ENCODE) {
				this.encode();
			} else if (this.states.codecMode == this.modes.DECODE) {
				this.decode();
			}
			/*
			var query = {}
			query[this.queryParameters.MODE] = this.states.codecMode;
			query[this.queryParameters.INPUT] = this.states.input;
			this.$router.replace({ 
				name: 'home', 
				query: query
			});
			*/
		},
		pasteInput() {
			navigator.clipboard.readText()
			.then(text => {
				this.data.input = text;
				this.inputChanged();
			}).catch(error => {
				this.notify('pasteFail');
			});
		},
		copyOutput() {
			//navigator.clipboard.writeText(this.data.output)
			this.writeText(this.data.output)
			.then(text => {
				this.notify('copySuccess');
			})
			.catch(error => {
				this.notify('copyFail');
			})
		},
		copyPermalink() {
			var baseUrl = window.location.origin + window.location.pathname;
			var params = {}
			params[this.queryParameters.MODE] = this.states.codecMode;
			if (this.data.input != null) {
				console.log('q != null')
				params[this.queryParameters.INPUT] = this.data.input;
			}
			console.log(params)
			var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
			var output = `${baseUrl}?${queryString}`;


			//navigator.clipboard.writeText(output)
			this.writeText(output)
			.then(text => {
				this.notify('permalinkSuccess');
			})
			.catch(error => {
				this.notify('copyFail');
			})
			return output;
		},
		getDownloadLink(event) {
			return 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.data.output);
		},
		notify(id) {
			console.log(this.$refs);
			var alertId = `alert_${id}`;
			console.log(alertId);
			console.log(this.$refs[alertId][0]);
			this.$refs[alertId][0].show();
		},
		scrollToOutput() {
			this.$refs.output.scrollIntoView(); 
		},
		scrollToInput() {
			this.$refs.input.scrollIntoView(); 
		},
		writeText(str) {
			return new Promise(function(resolve, reject) {
				/********************************/
				var range = document.createRange();
				range.selectNodeContents(document.body);
				document.getSelection().addRange(range);
				/********************************/

				var success = false;
				function listener(e) {
					e.clipboardData.setData("text/plain", str);
					e.preventDefault();
					success = true;
				}
				document.addEventListener("copy", listener);
				document.execCommand("copy");
				document.removeEventListener("copy", listener);

				/********************************/
				document.getSelection().removeAllRanges();
				/********************************/

				success ? resolve(): reject();
			});
		}
	},
	template: `
		<div>
		<div class="d-flex flex-column vh-100">
		<article class="alerts fixed-top">
			<div
				v-for="(alert, index) in alerts"
				:key="'alert_' + index"
			>
				<alert
					:type="alert.type"
					:message="alert.message"
					:ref="'alert_' + index"
				></alert>
			</div>
		</article>
		<nav class="navbar mb-4">
			<div class="container">
				<a class="navbar-brand" href="#"><h1>
					<img src="static/images/logo.svg" width="30" height="30" class="d-inline-block align-top align-middle" :alt="$t('logoAlt')">
					{{ $t('title') }}
				</h1></a>
			</div>
		</nav>
		<article class="h-100 flex-grow-1">
			<section class="container h-100">
				<div class="row h-100">
					<div class="col-md-6 d-flex flex-column pb-4" ref="input">
						<div class="mb-2">
							<div class="btn-group btn-group-toggle" data-toggle="buttons">
								<button
									class="btn btn-primary mb-2"
									:class="{ active: states.codecMode==modes.DECODE }"
									@click="setDecodeMode()"
								>
									<i class="fas fa-unlock"></i>
									<span class="d-none d-xs-inline">
										{{ $t('decodeAction') }}
									</span>
								</button>
								<button
									class="btn btn-primary mb-2"
									:class="{ active: states.codecMode==modes.ENCODE }"
									@click="setEncodeMode()"
								>
									<i class="fas fa-lock"></i>
									<span class="d-none d-xs-inline">
										{{ $t('encodeAction') }}
									</span>
								</button>
							</div>
							<button
								class="btn btn-primary mb-2"
								@click="pasteInput()"
								v-if="states.hasClipboard"
							>
								<i class="fas fa-paste"></i>
								<span class="d-none d-lg-inline">
									{{ $t('paste') }}
								</span>
							</button>
							<button
								class="btn btn-primary mb-2 d-none d-xs-inline"
								@click="scrollToOutput()"
							>
								<i class="fas fa-caret-down"></i>
								<span class="d-none">
									{{ $t('seeOutput') }}
								</span>
							</button>
						</div>
						<div class="flex-grow-1">
							<!--textarea
								class="w-100 h-100 p-2 rounded"
								name="encoded"
								spellcheck="false"
								:placeholder="$t('inputPlaceholder')"
								v-model="data.input"
								@input="inputChanged()"
							></textarea-->
							<div
								class="w-100 h-100 p-2 rounded textarea"
								contenteditable="true"
								spellcheck="false"
								:placeholder="$t('inputPlaceholder')"
								v-model="data.input"
								@input="handleInputKeystroke($event)"
							></div>
						</div>
					</div>

					<div class="col-md-6 pb-4 d-flex flex-column" ref="output">
						<div class="mb-2 text-right">
							<button
								class="btn btn-primary mb-2 d-none d-xs-inline"
								@click="scrollToInput()"
							>
								<i class="fas fa-caret-up"></i>
								<span class="d-none">
									{{ $t('seeInput') }}
								</span>
							</button>
							<button
								class="btn btn-primary mb-2"
								:class="{ disabled: data.output==null }"
								@click="copyOutput()"
								:disabled="data.output==null"
							>
								<i class="fas fa-copy"></i>
								<span class="d-none d-lg-inline">
									{{ $t('copy') }}
								</span>
							</button>
							<a
								class="btn btn-primary mb-2"
								download="Base64 Encoded Data.b64"
								:href="getDownloadLink()"
								v-if="states.codecMode==modes.ENCODE && data.output!=null"
								:disabled="data.output==null"
							>
								<i class="fas fa-save"></i>
								<span class="d-none d-lg-inline">
									{{ $t('save') }}
								</span>
							</a>
							<a
								class="btn btn-primary mb-2"
								download="Base64 Decoded Data.txt"
								:href="getDownloadLink()"
								v-if="states.codecMode==modes.DECODE && data.output!=null"
								:disabled="data.output==null"
							>
								<i class="fas fa-save"></i>
								<span class="d-none d-lg-inline">
									{{ $t('save') }}
								</span>
							</a>
							<a
								class="btn btn-primary mb-2 disabled"
								download="Base64 Decoded Data.txt"
								href="#"
								v-if="data.output==null"
							>
								<i class="fas fa-save"></i>
								<span class="d-none d-lg-inline">
									{{ $t('save') }}
								</span>
							</a>
							<button
								class="btn btn-primary mb-2"
								@click="copyPermalink()"
							>
								<i class="fas fa-link"></i>
								<span class="d-none d-lg-inline">
									{{ $t('permalink') }}
								</span>
							</button>
						</div>
						<div class="flex-grow-1">
							<!--textarea
								class="w-100 h-100 p-2 rounded"
								name="decoded"
								spellcheck="false"
								readonly
								:placeholder="$t('outputPlaceholder')"
								v-model="data.output"
							></textarea-->
							<div
								class="w-100 h-100 p-2 rounded textarea"
								:placeholder="$t('outputPlaceholder')"
							>{{ data.output }}</div>
						</div>
					</div>

				</div>
			</section>
		</article>
		<footer>
			<section class="container pb-4">
				<div id="copyright">
					&copy; 2020 <a href="https://github.com/backupbrain">Tony Gaitatzis</a>, <a href="https://opensource.org/licenses/MIT">MIT License</a>
				</div>
			</section>
		</footer>
		</div>
		<article>
			<section class="container">
				<div class="fb-comments" data-href="https://backupbrain.github.io/quantum-compiler-simulator/" data-width="100%" data-numposts="20" data-colorscheme="dark">Loading Facebook Comments...</div>
			</section>
		</article>
		</div>
	`
};
