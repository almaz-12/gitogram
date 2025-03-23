<template>
  <div class="с-auth">
    <div class="с-auth__top">
      <AppLogo></AppLogo>
      <div class="с-auth__content">More than just one repository.<br>
        This is our digital world.</div>
      <button
        class="с-auth__btn"
        @click="goToGithubAuth"
      >
        <span class="text">Authorize with github</span>
        <div class="icon icon_github">
          <AppIcon name="Github"></AppIcon>
        </div>
      </button>
    </div>
    <div class="с-auth__bottom">
      <img src="@/assets/auth-bg.png" alt="" class="auth__img">
      <div class="copyright">© Gitogram from Loftschool</div>
    </div>
  </div>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue';
import AppIcon from '@/icons/AppIcon.vue';
import { ghAuthPage } from '@/api/rest/auth';

export default {
  components: {
    AppLogo,
    AppIcon,
  },
  methods: {
    async goToGithubAuth() {
      ghAuthPage();
    },
  },
  async created() {
    const code = new URLSearchParams(window.location.search).get('code');

    if (code) {
      try {
        // заглушка, получение токена с локалки не возможна, блокировка на стороне гита
        // const { token } = await getToken(code);

        localStorage.setItem('token', 'test-token');
        this.$router.replace({ name: 'feeds' });
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.с-auth {
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
