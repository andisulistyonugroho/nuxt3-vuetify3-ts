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
                Login dengan nomer wa &amp; password
              </v-card-text>
              <v-card-text class="px-4 pt-5">
                <v-form ref="form" lazy-validation>
                  <v-text-field
                    id="username"
                    v-model="formData.username"
                    :rules="[
                      (v) => !!v || 'Username is required'
                    ]"
                    label="Nomer WA"
                    placeholder="0812345xxxx"
                    persistent-placeholder
                    type="text"
                    outlined
                    required
                  />
                  <v-text-field
                    id="password"
                    key="password-input"
                    v-model="formData.password"
                    :rules="[
                      (v) => !!v || 'Password is required',
                      (v) =>
                        (v && v.length >= 6) ||
                        'Password cannot be less than 6 characters'
                    ]"
                    label="Password"
                    placeholder="password"
                    outlined
                    required
                    :append-inner-icon="showP ? `mdi-eye-outline` : `mdi-eye-off-outline`"
                    :type="showP ? `text` : `password`"
                    @keypress.13.prevent="doLogin"
                    @click:appendInner="showP = !showP"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions class="px-4">
                <v-btn
                  variant="flat"
                  size="large"
                  block
                  color="primary"
                  @click="doLogin"
                >
                  login
                </v-btn>
              </v-card-actions>
              <v-card-text>
                <div class="text-center">
                  Belum punya akun?
                  <nuxt-link to="/register">
                    daftar sekarang
                  </nuxt-link>
                </div>
              </v-card-text>
              <v-card-text class="greylight">
                <div class="text-center">
                  Lupa password hubungi admin
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
  username: null,
  password: null
})
const showP = ref(false)
const form = ref()
const route = useRouter()

const doLogin = debounce(async () => {
  const validation = await form.value.validate()
  if (validation.valid) {
    console.log('do login stuff')
    route.push('/')
  }
})
</script>
