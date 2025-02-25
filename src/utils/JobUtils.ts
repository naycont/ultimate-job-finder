export const formValidationRules = {
  required: [
    (value: string) => {
      if (value && value.trim() !== '') return true

      return 'This field is required.'
    },
    (value: string) => {
      if (value.length > 1) return true

      return 'This field must be greater than 1 character.'
    }
  ],
  email: [
    (value: string) => {
      if (value) return true

      return 'This field is required.'
    },
    (value: string) => {
      if (/.+@.+\..+/.test(value)) return true

      return 'E-mail must be valid'
    }
  ]
}
