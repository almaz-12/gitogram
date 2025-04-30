<template>
  <div class="logo">
    <AppLogo/>
  </div>
  <ul class="buttons">
    <div class="buttons-item buttons-item_home">
      <router-link :to="{ name: 'feeds' }">
        <AppIcon name="Home"/>
      </router-link>
    </div>
    <div class="buttons-item buttons-item_user">
      <router-link :to="{ name: 'user' }">
        <AppAvatar :url="user.avatar_url" :alt="user.name" size="small"/>
      </router-link>
    </div>
    <div class="buttons-item buttons-item_logout">
      <AppIcon name="Logout" @click="logout"/>
    </div>
  </ul>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import AppIcon from '@/icons/AppIcon.vue';
import AppLogo from '@/components/AppLogo.vue';
import AppAvatar from '@/components/AppAvatar.vue';

const router = useRouter();
const store = useStore();

const user = computed(() => store.state.user.data);
const fetchUser = () => store.dispatch('user/fetchUser');

fetchUser();

function logout() {
  localStorage.removeItem('token');
  router.replace({ name: 'auth' });
  window.location.reload();
}

// onMounted(async () => {
//   await fetchUser();
// });

// export default {
//   name: 'TopNavigation',
//   components: {
//     AppIcon,
//     AppLogo,
//     AppAvatar,
//   },
//   computed: {
//     ...mapState({
//       user: (state) => state.user.data,
//     }),
//   },
//   methods: {
//     ...mapActions({
//       fetchUser: 'user/fetchUser',
//     }),
//     logout: () => {
//       localStorage.removeItem('token');
//       this.$router.replace({ name: 'authPage' });
//       window.location.reload();
//     },
//   },
//   async created() {
//     this.$nextTick(async () => {
//       await this.fetchUser();
//     });
//   },
// };
</script>
<style lang="scss" scoped>
.logo {
  width: 174px;
  height: 35px;
  color: #000;
}
.buttons {
  display: flex;
  align-items: center;

  &-item {
    cursor: pointer;
    color: #000;

    &_home {
      width: 24px;
      height: 25px;
    }

    &_user {
      margin-left: 23px;
    }

    &_logout {
      width: 25px;
      height: 20px;
      margin-left: 23px;
    }
  }
}

</style>
