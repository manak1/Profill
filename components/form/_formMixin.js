export default {
  model: {
    prop: "form",
    event: "input",
  },
  data() {
    return {}
  },
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
  methods: {
    classNames(className, keys = []) {
      return {
        [className]: true,
        isError: !!this.getMessages(keys),
      }
    },
    getMessages(keys) {
      const errors = []
      if (!this.$v) {
        return null
      }

      for (let key of keys) {
        if (!this.$v.form[key].$dirty) {
          continue
        }
        const rules = Object.keys(this.$v.form[key].$params)

        for (let rule of rules) {
          if (rule === "required" && this.$v.form[key][rule] === false) {
            errors.push(this.messages[key][rule])
            return errors
          }
          if (this.$v.form[key][rule] === false) {
            errors.push(this.messages[key][rule])
          }
        }
      }

      if (errors.length === 0) {
        return null
      }
      return errors
    },
    input() {
      if (!this.$v.$invalid) {
        this.form.isValid = false
        this.$emit("input", this.form)
      }
      this.form.isValid = !!this.$v.$anyError
    },
  },
}
