<template>
  <div :class="['slide', {active: active}]">
    <div class="slide__container">
      <div class="slide__header">
        <AppProgress
          :isActive="active"
          @on-finish="onFinish"
        />
        <div class="slide__user-info">
          <UserItem :url="owner.avatar_url" :userName="owner.login" :alt="owner.login" size="medium"/>
        </div>
      </div>
      <div class="slide__content">
        <div class="slide__loader" v-if="loading">
          <AppSpinner />
        </div>
        <div class="slide__info" v-else >
          <div class="" v-if="description && description.length" v-html="description"></div>
          <AppPlaceholder v-else/>
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
    <template v-if="active">
      <button v-if="showBtns.prev" class="btn btn-prev" @click="prevSlide">
        <div class="icon icon_arrow">
          <AppIcon name="ArrowLeft"/>
        </div>
      </button>
      <button v-if="showBtns.next" class="btn btn-next" @click="nextSlide">
        <div class="icon icon_arrow">
          <AppIcon name="ArrowRight"/>
        </div>
      </button>
    </template>
  </div>
</template>

<script>
import AppIcon from '@/icons/AppIcon.vue';
import AppButton from './AppButton.vue';
import AppProgress from './AppProgress.vue';
import UserItem from './UserItem.vue';
import AppPlaceholder from './AppPlaceholder.vue';
import AppSpinner from './AppSpinner.vue';

export default {
  name: 'StoriesSliderItem',
  components: {
    AppButton,
    UserItem,
    AppProgress,
    AppPlaceholder,
    AppSpinner,
    AppIcon,
  },
  data() {
    return {
      hoverText: 'Unfollow',
      size_s: 'size_s',
      size_m: 'size_m',
      theme_green: 'theme_green',
    };
  },
  emits: ['onPrevSlide', 'onNextSlide'],
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Object,
      default() {
        return {};
      },
    },
    description: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    showBtns: {
      type: Object,
      default() {
        return {
          next: true,
          prev: true,
        };
      },
    },
  },
  methods: {
    onFinish() {
      if (this.showBtns.next) {
        this.nextSlide();
      }
    },
    prevSlide() {
      this.$emit('onPrevSlide');
    },
    nextSlide() {
      this.$emit('onNextSlide');
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
    padding-left: 15px;
    padding-right: 15px;

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
    line-height: 10px;

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
    padding: 15px;

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
