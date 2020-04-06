import Alert from './Alert.vue.js';
import Dropdown from './Dropdown.vue.js';

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
				mitLicense: 'MIT License',
				loadingFacebookComments: 'Loading Facebook Comments...',
			},
			fr: {
				title: 'Encodeur et décodeur Base64',
				logoAlt: 'Image logo',
				decodeAction: 'Depuis Base64',
				encodeAction: 'Vers Base64',
				copy: 'Copie',
				save: 'Enregistrer',
				paste: 'Coller',
				permalink: 'Lien permanent',
				inputPlaceholder: 'Saisissez du texte ou du contenu Base64 ici',
				outputPlaceholder: 'Le résultat apparaîtra ici',
				invalidInput: '(Erreur: l\'entrée n\'était pas une chaîne Base64 valide)',
				permalinkSuccess: 'Le permalien a été copié dans le presse-papiers',
				copySuccess: 'Le résultat a été copié dans le presse-papiers',
				copyFail: 'Impossible d\'accéder au presse-papiers',
				pasteFail: 'Impossible d\'accéder au presse-papiers',
				seeInput: 'Faites défiler pour entrer',
				seeOutput: 'Faites défiler jusqu\'à la résultat',
				mitLicense: 'Licence MIT',
				loadingFacebookComments: 'Chargement des commentaires Facebook ...',
			},
			es: {
				title: 'Codificador y decodificador Base64',
				logoAlt: 'Logotipo de la imagen',
				decodeAction: 'De Base64',
				encodeAction: 'A base64',
				copy: 'Copiar',
				save: 'Guarde',
				paste: 'Pegar',
				permalink: 'enlace permanente',
				inputPlaceholder: 'Escriba texto o contenido Base64 aquí',
				outputPlaceholder: 'El resultado aparecerá aquí',
				invalidInput: '(Error: la entrada no era una cadena Base64 válida)',
				permalinkSuccess: 'Enlace permanente copiado al portapapeles',
				copySuccess: 'Copié el resultado al portapapeles',
				copyFail: 'No se pudo acceder al portapapeles',
				pasteFail: 'No se pudo acceder al portapapeles',
				seeInput: 'Desplazarse a la entrada',
				seeOutput: 'Desplazarse al resultado',
				mitLicense: 'Licencia MIT',
				loadingFacebookComments: 'Cargando comentarios de Facebook ...',
			},
			de: {
				title: 'Base64 Encoder und Decoder',
				logoAlt: 'Logo Bild',
				decodeAction: 'Von Base64',
				encodeAction: 'Zu Base64',
				copy: 'Kopieren',
				save: 'Speichern',
				paste: 'Einfügen',
				permalink: 'Permalink',
				inputPlaceholder: 'Geben Sie hier Text oder Base64-Inhalt ein',
				outputPlaceholder: 'Das Ergebnis wird hier angezeigt',
				invalidInput: '(Fehler: Eingabe war keine gültige Base64-Zeichenfolge)',
				permalinkSuccess: 'Permalink in die Zwischenablage kopiert',
				copySuccess: 'Kopierte das Ergebnis in die Zwischenablage',
				copyFail: 'Zugriff auf Zwischenablage nicht möglich',
				pasteFail: 'Zugriff auf Zwischenablage nicht möglich',
				seeInput: 'Scrollen Sie zur Eingabe',
				seeOutput: 'Scrollen Sie zum Ergebnis',
				mitLicense: 'MIT-Lizenz',
				loadingFacebookComments: 'Laden von Facebook-Kommentaren ...',
			},
			gr: {
				title: 'Κωδικοποιητής και αποκωδικοποιητής Base64',
				logoAlt: 'Εικόνα λογότυπου',
				decodeAction: 'Από το Base64',
				encodeAction: 'Στη βάση64',
				copy: 'Αντιγραφή',
				save: 'Αποθήκευση',
				paste: 'Επικόλληση',
				permalink: 'Permalink',
				inputPlaceholder: 'Πληκτρολογήστε κείμενο ή περιεχόμενο Base64 εδώ',
				outputPlaceholder: 'Το αποτέλεσμα θα εμφανιστεί εδώ',
				invalidInput: '(Σφάλμα: Η είσοδος δεν ήταν έγκυρη συμβολοσειρά Base64)',
				permalinkSuccess: 'Αντιγράφηκε το permalink στο πρόχειρο',
				copySuccess: 'Αντιγράψτε το αποτέλεσμα στο πρόχειρο',
				copyFail: 'Δεν ήταν δυνατή η πρόσβαση στο πρόχειρο',
				pasteFail: 'Δεν ήταν δυνατή η πρόσβαση στο πρόχειρο',
				seeInput: 'Μεταβείτε στην επιλογή εισαγωγής',
				seeOutput: 'Μεταβείτε στο αποτέλεσμα',
				mitLicense: 'Άδεια MIT',
				loadingFacebookComments: 'Φόρτωση Facebook Σχόλια ...',
			},
			ar: {
				title: 'Base64 التشفير وفك التشفير',
				logoAlt: 'صورة الشعار',
				decodeAction: 'من Base64',
				encodeAction: 'إلى Base64',
				copy: 'نسخ',
				save: 'حفظ',
				paste: 'معجون',
				permalink: 'الرابط الثابت',
				inputPlaceholder: 'اكتب النص أو محتوى Base64 هنا',
				outputPlaceholder: 'ستظهر النتيجة هنا',
				invalidInput: '(خطأ: الإدخال لم يكن سلسلة Base64 صالحة)',
				permalinkSuccess: 'تم نسخ الرابط الثابت إلى الحافظة',
				copySuccess: 'نسخ النتيجة إلى الحافظة',
				copyFail: 'تعذر الوصول إلى الحافظة',
				pasteFail: 'تعذر الوصول إلى الحافظة',
				seeInput: 'انتقل إلى الإدخال',
				seeOutput: 'انتقل إلى النتيجة',
				mitLicense: 'رخصة MIT',
				loadingFacebookComments: 'جارٍ تحميل تعليقات Facebook ...',
			},
			tr: {
				title: 'Base64 Kodlayıcı ve Kod Çözücü',
				logoAlt: 'Logo resmi',
				decodeAction: 'Base64 Gönderen',
				encodeAction: 'Base64\'e',
				copy: 'kopya',
				save: 'Kayıt etmek',
				paste: 'Yapıştırmak',
				permalink: 'kalıcı',
				inputPlaceholder: 'Buraya metin veya Base64 içeriği yazın',
				outputPlaceholder: 'Результат появится здесь',
				invalidInput: '(Hata: Giriş geçerli bir Base64 dizesi değildi)',
				permalinkSuccess: 'Kalıcı bağlantı panoya kopyalandı',
				copySuccess: 'Sonucu panoya kopyaladı',
				copyFail: 'Panoya erişilemedi',
				pasteFail: 'Panoya erişilemedi',
				seeInput: 'Girişe ilerleyin',
				seeOutput: 'Sonuca ilerleyin',
				mitLicense: 'MIT Lisansı',
				loadingFacebookComments: 'Facebook Yorumları Yükleniyor ...',
			},
			ru: {
				title: 'Base64 кодер и декодер',
				logoAlt: 'Изображение логотипа',
				decodeAction: 'От Base64',
				encodeAction: 'До Base64',
				copy: 'копия',
				save: 'Сохранить',
				paste: 'Вставить',
				permalink: 'Постоянная ссылка',
				inputPlaceholder: 'Введите текст или содержимое Base64 здесь',
				outputPlaceholder: 'Выход появится здесь',
				invalidInput: '(Ошибка: ввод не был допустимой строкой Base64)',
				permalinkSuccess: 'Скопирован постоянная ссылка в буфер обмена',
				copySuccess: 'Скопировал результат в буфер обмена',
				copyFail: 'Не удалось получить доступ к буферу обмена',
				pasteFail: 'Не удалось получить доступ к буферу обмена',
				seeInput: 'Прокрутите до ввода',
				seeOutput: 'Прокрутите до результата',
				mitLicense: 'Лицензия MIT',
				loadingFacebookComments: 'Загрузка комментариев Facebook ...',
			},
		}
	},
	components: {
		'alert': Alert,
		'dropdown': Dropdown,
	},
	data () {
		return {
			queryParameters: {
				MODE: 'mode',
				INPUT: 'q',
				LOCALE: 'lang',
			},
			modes: {
				ENCODE: 'encode',
				DECODE: 'decode'
			},
			alerts: {
				copySuccess: { type: 'success', message: 'copySuccess' },
				permalinkSuccess: { type: 'success', message: 'permalinkSuccess' },
				copyFail: { type: 'danger', message: 'copyFail' },
				pasteFail: { type: 'danger', message: 'pasteFail' },
			},
			data: {
				input: null,
				output: null,
			},
			states: {
				codecMode: 'decode',
				hasClipboard: false,
			},
			supportedLanguages: [
				{ id: 'en', name: 'English', fbLink: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0&appId=1530095437214003&autoLogAppEvents=1' },
				{ id: 'fr', name: 'Français', fbLink: 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v6.0&appId=1530095437214003&autoLogAppEvents=1' },
				{ id: 'es', name: 'Español', fbLink: 'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v6.0&appId=1530095437214003&autoLogAppEvents=1' },
				{ id: 'de', name: 'Deutsche', fbLink: 'https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v6.0&appId=1530095437214003&autoLogAppEvents=1' },
				{ id: 'gr', name: 'Ελληνικά', fbLink: 'https://connect.facebook.net/el_GR/sdk.js#xfbml=1&version=v6.0&appId=1530095437214003&autoLogAppEvents=1' },
				{ id: 'ar', name: 'عربى', fbLink: 'https://connect.facebook.net/ar_AR/sdk.js#xfbml=1&version=v6.0&appId=1530095437214003&autoLogAppEvents=1' },
				{ id: 'tr', name: 'Türk', fbLink: 'https://connect.facebook.net/tr_TR/sdk.js#xfbml=1&version=v6.0&appId=1530095437214003&autoLogAppEvents=1' },
				{ id: 'ru', name: 'русский', fbLink: 'https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v6.0&appId=1530095437214003&autoLogAppEvents=1' },
			],
			currentLanguage: { id: 'en', name: 'English', fbLink: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0&appId=1530095437214003&autoLogAppEvents=1' },
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

		if (this.queryParameters.LOCALE in this.$route.query) {
			var wasLanguageFound = false;
			var localeId = this.$route.query[this.queryParameters.LOCALE];
			for (var i=0; i<this.supportedLanguages.length; i++) {
				var language = this.supportedLanguages[i];
				if (localeId == language.id) {
					this.setLocale(language);
					wasLanguageFound = true;
					break;
				}
			}
			if (!wasLanguageFound) {
				this.setLocale(this.supportedLanguages[0]);
			}
		} else {
			this.setLocale(this.supportedLanguages[0]);
		}

	},
	methods: {
		setLocale(locale) {
			this.currentLanguage = locale;
			this.setLocaleId(locale.id);
			this.$refs["languageSwitcher"].select(locale);
		},
		setLocaleId(localeId) {
			this.$i18n.locale = localeId;
		},
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
			params[this.queryParameters.LOCALE] = this.currentLanguage.id;
			if (this.data.input != null) {
				params[this.queryParameters.INPUT] = this.data.input;
			}
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
			var alertId = `alert_${id}`;
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
					:message="$t(alert.message)"
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
				<ul class="ml-auto navbar-nav">
					<li class="nav-item dropdown">
						<dropdown
							:options='supportedLanguages'
							:default='currentLanguage.id'
							@select="setLocale($event)"
							ref="languageSwitcher"
						></dropdown>
					</li>
				</ul>
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
									<span class="d-none d-sm-inline">
										{{ $t('decodeAction') }}
									</span>
								</button>
								<button
									class="btn btn-primary mb-2"
									:class="{ active: states.codecMode==modes.ENCODE }"
									@click="setEncodeMode()"
								>
									<i class="fas fa-lock"></i>
									<span class="d-none d-sm-inline">
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
							<textarea
								class="w-100 h-100 p-2 rounded"
								name="encoded"
								spellcheck="false"
								:placeholder="$t('inputPlaceholder')"
								v-model="data.input"
								@input="inputChanged()"
							></textarea>
							<!--div
								class="w-100 h-100 p-2 rounded textarea"
								contenteditable="true"
								spellcheck="false"
								:placeholder="$t('inputPlaceholder')"
								v-model="data.input"
								@input="handleInputKeystroke($event)"
							></div-->
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
							<textarea
								class="w-100 h-100 p-2 rounded"
								name="decoded"
								spellcheck="false"
								readonly
								:placeholder="$t('outputPlaceholder')"
								v-model="data.output"
							></textarea>
							<!--div
								class="w-100 h-100 p-2 rounded textarea"
								:placeholder="$t('outputPlaceholder')"
							>{{ data.output }}</div-->
						</div>
					</div>

				</div>
			</section>
		</article>
		<footer>
			<section class="container pb-4">
				<div id="copyright">
					&copy; 2020 <a href="https://github.com/backupbrain">Tony Gaitatzis</a>, <a href="https://opensource.org/licenses/MIT">{{ $t('mitLicense') }}</a>
				</div>
			</section>
		</footer>
		</div>
		<article>
			<section class="container">
				<div class="fb-comments" data-href="https://backupbrain.github.io/base64/" data-width="100%" data-numposts="5" data-colorscheme="dark">{{ $t('loadingFacebookComments') }}</div>
			</section>
		</article>
		</div>
	`
};
