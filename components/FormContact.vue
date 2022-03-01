<template>
	<form id="contactform" class="w-full">
		<div class="flex flex-wrap mb-6 -mx-3">
			<div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
				<label
					class="block mb-2 font-bold tracking-wide"
					for="first-name"
				>
					Prénom<sup>*</sup>
				</label>
				<input
					:class="{ 'is-danger': fieldErrors.firstname }"
					class="block w-full px-4 py-3 mb-3 leading-tight bg-gray-800 border border-gray-700 rounded appearance-none focus:outline-none focus:border-gray-500"
					id="first-name"
					name="user_firstname"
					type="text"
					@focus="resetInput('firstname')"
					v-model="firstname"
				/>
				<p class="text-sm text-red-700" v-if="fieldErrors.firstname">
					{{ fieldErrors.firstname }}
				</p>
			</div>
			<div class="w-full px-3 md:w-1/2">
				<label
					class="block mb-2 font-bold tracking-wide"
					for="last-name"
				>
					Nom<sup>*</sup>
				</label>
				<input
					:class="{ 'is-danger': fieldErrors.lastname }"
					class="block w-full px-4 py-3 mb-3 leading-tight bg-gray-800 border border-gray-700 rounded appearance-none focus:outline-none focus:border-gray-500"
					id="last-name"
					name="user_lastname"
					type="text"
					@focus="resetInput('lastname')"
					v-model="lastname"
				/>
				<p class="text-sm text-red-700" v-if="fieldErrors.lastname">
					{{ fieldErrors.lastname }}
				</p>
			</div>
		</div>
		<div class="flex flex-wrap mb-6 -mx-3">
			<div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
				<label class="block mb-2 font-bold tracking-wide" for="email">
					Email<sup>*</sup>
				</label>
				<input
					:class="{ 'is-danger': fieldErrors.email }"
					class="block w-full px-4 py-3 mb-3 leading-tight bg-gray-800 border border-gray-700 rounded appearance-none focus:outline-none focus:border-gray-500"
					id="email"
					name="user_email"
					type="text"
					@focus="resetInput('email')"
					v-model="email"
				/>
				<p class="text-sm text-red-700" v-if="fieldErrors.email">
					{{ fieldErrors.email }}
				</p>
			</div>
			<div class="w-full px-3 md:w-1/2">
				<label class="block mb-2 font-bold tracking-wide" for="company">
					Société
				</label>
				<input
					class="block w-full px-4 py-3 mb-3 leading-tight bg-gray-800 border border-gray-700 rounded appearance-none focus:outline-none focus:border-gray-500"
					id="company"
					name="user_company"
					type="text"
					v-model="company"
				/>
			</div>
		</div>
		<div class="flex flex-wrap mb-6 -mx-3">
			<div class="w-full px-3">
				<label class="block mb-2 font-bold tracking-wide" for="message">
					Message<sup>*</sup>
				</label>
				<textarea
					rows="5"
					:class="{ 'is-danger': fieldErrors.message }"
					class="block w-full px-4 py-3 mb-3 leading-tight transition-colors duration-100 ease-in-out bg-gray-800 border border-gray-700 rounded appearance-none focus:outline-none focus:border-gray-500"
					id="message"
					name="user_message"
					@focus="resetInput('message')"
					v-model="message"
				/>
				<p class="text-sm text-red-700" v-if="fieldErrors.message">
					{{ fieldErrors.message }}
				</p>
			</div>
		</div>
		<p class="text-xs italic text-gray-600">* Champs obligatoires</p>
		<div class="flex items-center justify-center">
			<button
				:disabled="sending"
				:class="{ 'is-loading': sending }"
				class="flex px-4 py-2 font-medium tracking-wide text-white uppercase transition-colors duration-100 transform bg-purple-600 rounded-md cursor-pointer hover:bg-purple-700 focus:outline-none"
				@click.prevent="send"
			>
				<span v-if="sending">
					<svg
						class="w-5 h-5 mr-3 text-white animate-spin"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							class="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							stroke-width="4"
						></circle>
						<path
							class="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
				</span>
				<span>Envoyer</span>
			</button>
		</div>
	</form>
</template>

<script>
import ContactServices from "@/services/contact.services";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
init("user_ys4GpmHCyFQhA7jdK91d6");

export default {
	data () {
		return {
			firstname: null,
			lastname: null,
			email: null,
			company: null,
			message: null,
			fieldErrors: {},
			errors: [],
			sending: false
		}
	},
	methods: {
		send () {
			if (!this.validate()) return false

			this.isLoading = true
			this.sendEmail()
		},
		validate () {
			this.errors = []
			this.fieldErrors = {}

			if (this.firstname === null || this.firstname.trim().length < 1) {
				this.errors.push({
					param: "firstname"
				});
				this.fieldErrors.firstname = "Nom obligatoire"
			}

			if (this.lastname === null || this.lastname.trim().length < 1) {
				this.errors.push({
					param: "lastname"
				})
				this.fieldErrors.lastname = "Prénom obligatoire"
			}

			if (this.email === null || this.email.trim().length < 1) {
				this.errors.push({
					param: "email"
				})
				this.fieldErrors.email = "Email obligatoire"
			}

			if (this.email && !ContactServices.isEmailValid(this.email)) {
				this.errors.push({
					param: "email"
				})
				this.fieldErrors.email = "Email invalide"
			}

			if (this.message === null || this.message.trim().length < 1) {
				this.errors.push({
					param: "message"
				})
				this.fieldErrors.message = "Message obligatoire"
			}

			if (this.errors.length > 0) {
				this.$toasted.error(
					"Merci de remplir les champs obligatoires."
				)
				return false
			} else {
				this.sending = true
				return true
			}
		},
		sendEmail () {
			emailjs
				.sendForm("service_956b2u8", "template_u2xvkg9", "#contactform")
				.then(
					result => {
						this.sending = false;
						this.$toasted.success(
							"Votre message a bien été envoyé."
						)
						this.resetForm()
						console.log("SUCCESS!", result.status, result.text)
					},
					error => {
						this.sending = false
						this.$toasted.info(
							"Il y a eu un soucis lors de l'envoi du message, merci de me contacter par email."
						);
						this.resetForm();
						console.log("FAILED...", error)
					}
				)
		},
		resetInput (e) {
			if (this.fieldErrors !== null) delete this.fieldErrors[e]
		},
		resetForm () {
			this.firstname = this.lastname = this.email = this.company = this.message = null
		}
	}
}
</script>
