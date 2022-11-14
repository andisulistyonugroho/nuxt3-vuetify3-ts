<template>
  <v-app id="login">
    <v-main>
      <v-container fill-height fluid>
        <v-row
          align="center"
          justify="center"
          style="height:100vh"
        >
          <v-col cols="12" sm="8" md="4">
            <v-card class="py-5">
              <v-card-title
                class="justify-center text-center text-uppercase headline"
              >
                katering kaf
              </v-card-title>
              <v-card-text class="text-center overline">
                daftar dengan nomer wa &amp; password
              </v-card-text>
              <v-card-text class="px-4 pt-5">
                <v-form ref="form" lazy-validation>
                  <v-text-field
                    id="fullname"
                    v-model="formData.fullname"
                    :rules="[
                      (v) => !!v || 'Nama Walisantri is required'
                    ]"
                    label="Nama Walisantri"
                    placeholder=""
                    outlined
                    required
                  />
                  <v-text-field
                    id="username"
                    v-model="formData.username"
                    :rules="[
                      (v) => !!v || 'Nomer WA is required',
                      (v) => Number.isInteger(Number(v)) || 'Nomer WA tidak valid',
                      (v) =>
                        (v && v.length >= 10) ||
                        'Nomer tidak boleh kurang dari 10 karakter'
                    ]"
                    label="Nomer WA"
                    placeholder="0812345678910"
                    persistent-placeholder
                    type="text"
                    outlined
                    required
                  />
                  <v-checkbox
                    v-model="formData.checkbox"
                    :rules="[v => !!v || 'Cek dulu sebelum melanjutkan']"
                    label="Data yang saya isi sudah benar"
                    required
                  />
                </v-form>
              </v-card-text>
              <v-card-actions class="px-4">
                <v-btn
                  variant="flat"
                  block
                  size="large"
                  color="primary"
                  @click="doRegister"
                >
                  daftar
                </v-btn>
              </v-card-actions>
              <v-card-text>
                <div class="text-center">
                  sudah punya akun?
                  <nuxt-link to="/login">
                    login
                  </nuxt-link>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import debounce from 'lodash.debounce'
const formData = ref({
  fullname: null,
  username: null,
  checkbox: false
})
const form = ref()
const route = useRouter()

const doRegister = debounce(async () => {
  const validation = await form.value.validate()
  if (validation.valid) {
    console.log('do registration stuff')
    route.push('/')
  }
}, 500, { leading: true, trailing: false })
</script>
