<template>
  <form @submit.prevent="submitForm">
    <div class="form-inner">
      <div class="columns is-multiline">
        <div class="column is-6">
          <div class="field">
            <div class="control">
              <label>First name <span style="color: red">*</span> </label>
              <input
                class="input"
                type="text"
                v-model="firstName"
                placeholder="First Name"
              />
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="field">
            <div class="control">
              <label>last name <span style="color: red">*</span> </label>
              <input
                class="input"
                type="text"
                v-model="lastName"
                placeholder="last Name"
              />
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="field">
            <div class="control">
              <label>Middle name <span style="color: red">*</span></label>
              <input
                class="input"
                type="text"
                @input="validateForm"
                placeholder="Middle Name"
                v-model="middleName"
              />
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="field">
            <div class="control">
              <label>Phone <span style="color: red">*</span> </label>
              <input
                class="input"
                type="text"
                placeholder="Phone number"
                v-model="phoneNumber"
              />
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="field">
            <div class="control">
              <label>Email <span style="color: red">*</span> </label>
              <input
                class="input"
                type="email"
                placeholder="Email"
                v-model="email"
              />
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="field">
            <div class="control">
              <label>Date of birth <span style="color: red">*</span></label>
              <input class="input" v-model="dateOfBirth" type="date" value="" />
            </div>
          </div>
        </div>

        <div class="column is-12">
          <div class="field">
            <div class="control required">
              <label>Address <span style="color: red">*</span></label>
              <textarea
                v-model="homeAddress"
                @input="validateForm"
                class="is-grow textarea"
              >
              </textarea>
            </div>
          </div>
        </div>
        <div class="column is-12">
          <div class="field">
            <div class="control required">
              <small class="validation-info mt-2 is-error">{{
                formError
              }}</small>
            </div>
          </div>
        </div>

        <div class="column is-12 largeFixedButton">
          <br />
          <div class="field">
            <div class="buttons">
              <button
                style="width: 200px"
                type="submit"
                :disabled="emptyFields"
                :class="isButtonLoading && 'is-loading'"
                class="button form-button primary-btn raised"
              >
                Add Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import "@/mixins";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
      dateOfBirth: "",
      phoneNumber: "",
      homeAddress: "",
      emptyFields: true,
      isButtonLoading: false,
      formError: "",
    };
  },

  methods: {
    validateForm: function () {
      if (
        !this.firstName ||
        !this.lastName ||
        !this.email ||
        !this.phoneNumber ||
        !this.homeAddress
      ) {
        this.emptyFields = true;
        this.formError = "Please fill out all required fields";

        return false;
      }

      this.emptyFields = false;
      this.formError = "";
      return true;
    },

    submitForm: function () {
      this.isButtonLoading = true;
      this.emptyFields = true;

      const url = `${this.baseUrl}/v1.0/VirtualCard/addCardRequest`;

      var data = {
        AppId: this.AppId,
        RequestId: this.RequestId,
        firstName: this.firstName,
        lastName: this.lastName,
        middleName: this.middleName,
        email: this.email,
        address: this.homeAddress,
        phoneNumber: this.phoneNumber,
        dob: this.dateOfBirth,
      };

      this.axios
        .post(url, data)
        .then((response) => {
          console.log(response.data);
          setTimeout(() => {
            this.isButtonLoading = false;
            this.emptyFields = false;

            if (response.data.success == true) {
              this.setMessagePopup({
                status: true,
                type: "success",
                title: "Card Added",
                des: response.data.message,
                payload: null,
              });

              this.getCardRequest();

              this.clearInputs();
            } else {
              this.setMessagePopup({
                status: true,
                type: "error",
                title: " Error",
                des: response.data.message,
                payload: null,
              });
            }
          }, 2000);
        })
        .catch((err) => {
          err;
          this.isButtonLoading = false;
          this.emptyFields = false;

          this.serverErrorMessage();
        });
    },

    clearInputs: function () {
      this.firstName = "";
      this.lastName = "";
      this.middleName = "";
      this.email = "";
      this.dateOfBirth = "";
      this.phoneNumber = "";
      this.homeAddress = "";
      this.emptyFields = true;
      this.isButtonLoading = false;
      this.formError = "";
    },
  },
};
</script>
<style scoped>
form {
  width: 70%;
  margin-top: 70px;
  margin-bottom: 60px;
  padding-left: 10px;
  padding-right: 10px;
}

form .control label {
  font-size: 1.2rem;
  margin-bottom: 20px !important;
}

form .input,
form .textarea {
  color: #878787;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  height: 52px;
  background-color: #fff;
}

.textarea.is-grow {
  min-height: 90px !important;
  height: 50px;
}

form .select,
form .textarea {
  background-color: #fff;
}

.largeFixedButton button {
  height: 50px;
}

.input:invalid,
.textarea:invalid {
  border: 1px solid red;
}

@media screen and (max-width: 580px) {
  form {
    width: 100%;
    margin-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .largeFixedButton button {
    width: 100% !important;
  }
}
</style>
