<template>
  <div :class="['slide', {active: active}]">
    <div class="slide__container">
      <div class="slide__header">
        <AppProgress
          :isActive="active"
          @on-finish="onFinish"
        />
        <div class="slide__user-info">
          <UserItem url="assets/avatar-1.svg" :alt="userName" size="medium" :userName="userName"/>
        </div>
      </div>
      <div class="slide__content">
        <div class="slide__info" v-if="content && content.length">
          {{ content }}
        </div>
      </div>
      <div class="slide__button">
        <AppButton
          :size="size_m"
          :theme="theme_green"
          :hoverText="hoverText"
        >Follow</AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton.vue';
import AppProgress from './AppProgress.vue';
import UserItem from './UserItem.vue';

export default {
  name: 'StoriesSliderItem',
  components: {
    AppButton,
    UserItem,
    AppProgress,
  },
  data() {
    return {
      hoverText: 'Unfollow',
      size_s: 'size_s',
      size_m: 'size_m',
      theme_green: 'theme_green',
    };
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    avatarUrl: {
      type: String,
      default: 'https://picsum.photos/300/300',
    },
    userName: {
      type: String,
      default: 'NoName',
    },
    content: {
      type: String,
      default: 'Здесь ничего нет :(',
    },
  },
  methods: {
    onFinish() {
      console.log('финиш');
    },
  },
};
</script>

<style lang="scss">
.slide {
  width: 375px;
  height: 667px;
  transform: scale(.8);
  transition: .4s;
  position: relative;
  margin: 0 auto;

  &.active {
    transform: scale(1);
    z-index: 2;
  }

  &__user-info {
    display: flex;
    align-items: center;
    margin-top: 15px;
    gap: 15px;

    .user-name {
      color: #262626;
      font-weight: 700;
      font-size: 16px;
    }
  }

  &__container {
    border-radius: 8px;
    background-color: #FFFFFF;
    overflow: hidden;
    color: #404040;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .btn {
    display: flex;
    z-index: 3;
    position: absolute;
    top: 50%;
    border: 1px solid #000000;
    border-radius: 50%;
    padding: 9px;
    background-color: #FFFFFF;

    &-prev {
      left: -56px;
    }

    &-next {
      right: -56px;
    }

    .icon_arrow {
      width: 18px;
      color: #000000;
    }

    &:hover {
      .icon_arrow {
        color: #31AE54;
      }
    }
  }

  &__loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__info {
    flex: 1;
    font-size: 18px;
    line-height: 1.42;
    padding: 15px;
  }

  &__button {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    padding: 30px 52px;
    box-shadow: 0 0 10px rgba(00, 00, 00, .3);
  }
}

.slide {

  &__content {
    flex: 1;
    overflow-y: scroll;
    border-top: 1px solid #CACACA;
    border-bottom: 1px solid #CACACA;
    padding: 6px 0;

    &::-webkit-scrollbar {
      width: 19px;  /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-track {
      background: #FFFFFF;  /* color of the tracking area */
    }

    &::-webkit-scrollbar-thumb {
      background-color: #AFAFAF; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */
      border: 7px solid #FFFFFF; /* creates padding around scroll thumb */
    }
  }

  &__img {
    width: 294px;
    height: 204px;
    overflow: hidden;
    margin: 0 auto;

    img {
      width: 100%;
    }
  }

  &__text {
    line-height: 22px;
    color: #404040;

    p {
      margin-top: 14px;
    }
  }
}
</style>
