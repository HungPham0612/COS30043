<template>
  <div>
    <PageTitle title="Job Application" />
    <form
      method="post"
      action="http://mercury.swin.edu.au/it000000/formtest.php"
      @submit.prevent="handleSubmit"
    >
    <FormInput label="First Name" name="firstName" v-model="form.firstName" />
<ErrorText :message="errors.firstName" />

<FormInput label="Last Name" name="lastName" v-model="form.lastName" />
<ErrorText :message="errors.lastName" />

<FormInput label="Username" name="username" v-model="form.username" />
<ErrorText :message="errors.username" />

<FormInput label="Password" type="password" name="password" v-model="form.password" />
<ErrorText :message="errors.password" />

<FormInput label="Confirm Password" type="password" name="confirmPassword" v-model="form.confirmPassword" />
<ErrorText :message="errors.confirmPassword" />

<FormInput label="Email" name="email" v-model="form.email" />
<ErrorText :message="errors.email" />

<FormInput label="Street Address" name="street" v-model="form.street" />
<ErrorText :message="errors.street" />

<FormInput label="Suburb" name="suburb" v-model="form.suburb" />
<ErrorText :message="errors.suburb" />

<FormInput label="Postcode" name="postcode" v-model="form.postcode" />
<ErrorText :message="errors.postcode" />

<FormInput label="Mobile Number" name="mobile" v-model="form.mobile" />
<ErrorText :message="errors.mobile" />

<DatePickerField
  label="Date of Birth"
  name="birthdate"
  v-model="form.birthdate"
/>
<ErrorText :message="errors.birthdate" />

<DropdownSelect
  label="Preferred Job Category"
  name="category"
  v-model="form.category"
  :options="['AI', 'Data Science', 'Web Development']"
/>
<ErrorText :message="errors.category" />

<button type="button" class="btn btn-link" @click="showTerms = !showTerms">
  Terms and Conditions
</button>

<div v-if="showTerms" class="alert alert-secondary mt-2">
  These are the placeholder Terms and Conditions text.
</div>

      <button class="btn btn-primary mt-3" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import PageTitle from '@/components/reusable/PageTitle.vue'
import FormInput from '@/components/ui/ApplicationFormUI/FormInput.vue'
import ErrorText from '@/components/ui/ApplicationFormUI/ErrorText.vue'
import DropdownSelect from '@/components/reusable/DropdownSelect.vue'
import DatePickerField from '@/components/reusable/DatePickerField.vue'




export default {
  name: 'ApplicationForm',
  components: { PageTitle, FormInput, ErrorText, DropdownSelect, DatePickerField },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        street: '',
        suburb: '',
        postcode: '',
        mobile: '',
        category: '',
        birthdate: '',
      },
      errors: {},
      showTerms: false,
    }
  },
  methods: {
    handleSubmit() {
      this.errors = {}
      const f = this.form

      if (!/^[A-Za-z]+$/.test(f.firstName)) this.errors.firstName = 'Only letters allowed'
      if (!/^[A-Za-z]+$/.test(f.lastName)) this.errors.lastName = 'Only letters allowed'
      if (f.username.length < 3) this.errors.username = 'Minimum 3 characters'
      if (!/^(?=.*[$%^&*]).{8,}$/.test(f.password)) {
      this.errors.password = 'Password must be at least 8 characters long and contain one of $, %, ^, &, *'
      }
      if (f.confirmPassword !== f.password) this.errors.confirmPassword = 'Passwords do not match'
      if (!/^\S+@\S+\.\S+$/.test(f.email)) this.errors.email = 'Invalid email format'
      if (f.street.length > 40) this.errors.street = 'Max 40 characters'
      if (f.suburb.length > 20) this.errors.suburb = 'Max 20 characters'
      if (!/^\d{4}$/.test(f.postcode)) this.errors.postcode = 'Postcode must be 4 digits'
      if (!/^04\d{8}$/.test(f.mobile)) this.errors.mobile = 'Mobile must start with 04 and have 10 digits'
      if (!f.category) this.errors.category = 'Please select a category'

      if (!f.birthdate) {
  this.errors.birthdate = 'Date of Birth is required'
} else if (this.getAgeFromBirthdate(f.birthdate) < 16) {
  this.errors.birthdate = 'You must be at least 16 years old'
}

      if (Object.keys(this.errors).length === 0) {
        this.$el.querySelector('form').submit()
      }
    },
    getAgeFromYear(year) {
      const currentYear = new Date().getFullYear();
      return currentYear - year;
    },

    getAgeFromBirthdate(birthdate) {
  const today = new Date();
  const birth = new Date(birthdate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}
  }
}
</script>