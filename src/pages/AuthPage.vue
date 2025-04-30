<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

import AppLogo from '@/components/AppLogo.vue';
import AppIcon from '@/icons/AppIcon.vue';

import { ghAuthPage } from '@/api/rest/auth';
import { TOKEN } from '../../env';

const router = useRouter();

onMounted(() => {
  const code = new URLSearchParams(window.location.search).get('code');

  if (!code) return;

  try {
    // для продакщн
    // const { token } = await getToken(code);

    localStorage.setItem('token', TOKEN);
    axios.defaults.headers.Authorization = `token ${TOKEN}`;

    router.replace({ name: 'feeds' });
  } catch (error) {
    console.error('GitHub auth failed:', error);
  }
});

async function goToGithubAuth() {
  ghAuthPage();
}
</script>

<template>
  <div class="c-auth">
    <div class="c-auth__top">
      <AppLogo></AppLogo>
      <div class="c-auth__content">More than just one repository.<br>
        This is our digital world.</div>
      <button
        class="c-auth__btn"
        @click="goToGithubAuth"
      >
        <span class="text">Authorize with github</span>
        <div class="icon icon_github">
          <AppIcon name="Github"></AppIcon>
        </div>
      </button>

    </div>
    <div class="c-auth__bottom">
      <img src="@/assets/auth-bg.png" alt="" class="auth__img">
      <div class="copyright">© Gitogram from Loftschool</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-auth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &__top {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }

  &__content {
    width: 256px;
    text-align: center;
    margin-bottom: 30px;
  }

  &__btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    height: 44px;
    background: #31AE54;
    border-radius: 5px;

    .text {
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      color: #FFFFFF;
    }

    .icon_github {
      width: 23px;
      height: 23px;
      margin-left: 10px;
      color: #FFFFFF;
    }
  }

  &__img {
    margin-top: 90px;
  }

  &__bottom {
    .copyright {
      margin-top: -20px;
      text-align: center;
    }
  }
}
</style>
