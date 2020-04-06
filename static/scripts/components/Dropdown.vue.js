
export default {
	props: {
		options: {
			type: Array,  // [{ id: String, name: String }, ...]
			required: true
		},
		default: {
			type: String,
			default: null
		}
	},
	name: 'Dropdown',
	data () {
		return {
			emissions: {
				SELECT: 'select',
			},
			isOpen: false,
			selection: null,
		}
	},
	mounted() {
		if (this.default == null) {
			this.selection = this.options[0];
		} else {
			for (var i=0; i < this.options.length; i++) {
				var option = this.options[i];
				if (this.default == option.id) {
					this.selection = option;
					break;
				}
			}
		}
	},
	methods: {
		close() {
			this.isOpen = false;
		},
		show() {
			this.isOpen = true;
		},
		toggle() {
			this.isOpen = !this.isOpen
		},
		select(option) {
			this.selection = option;
		},
		selected(option) {
			this.selection = option;
			this.$emit(this.emissions.SELECT, option);
			this.close();
		},
	},
	template: `
			<div>
				<div
					class="modal"
					:class="{ show: isOpen }"
					@click="close()"
				></div>
				<a
					class="nav-link dropdown-toggle"
					role="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
					@click="toggle()"
					v-if="selection"
				>
					{{ selection.name }}
				</a>
				<div
					class="dropdown-menu"
					:class="{ show: isOpen }"
				>
					<a
						class="dropdown-item"
						v-for="(option, index) in options"
						:key="'option_' + index"
						@click="selected(option)"
					>{{ option.name }}</a>
				</div>
			</div>
	`
};
