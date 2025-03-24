<template>
  <div class="stories-slider">
    <div class="stories-container">
      <ul
        class="stories-slider__list"
        ref="slider"
      >
        <li
          class="stories-slider__item"
          ref="item"
          v-for="({ id, owner, readme }, index) in popularRepo"
          :key="id"
        >
          <StoriesSliderItem
            :owner="owner"
            :description="readme"
            :active="index === slideIndex"
            :loading="index === slideIndex && loading"
            :showBtns="activeBtns"
            @onNextSlide="handleSlide(index + 1)"
            @onPrevSlide="handleSlide(index - 1)"
            @follow="handleFollow()"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import StoriesSliderItem from './StoriesSliderItem.vue';

export default {
  name: 'StoriesSlider',
  components: {
    StoriesSliderItem,
  },
  props: {
    initSlide: {
      type: Number,
    },
  },
  data() {
    return {
      slideIndex: 0,
      sliderPosition: 0,
      loading: false,
      showBtns: {
        next: true,
        prev: true,
      },
    };
  },
  computed: {
    ...mapState({
      popularRepo: (state) => state.popularRepo.data,
    }),
    activeBtns() {
      return {
        prev: this.slideIndex !== 0,
        next: this.slideIndex !== this.popularRepo.length - 1,
      };
    },
  },
  methods: {
    ...mapActions({
      fetchPopularRepo: 'popularRepo/fetchPopularRepo',
      fetchReadme: 'popularRepo/fetchReadme',
    }),
    moveSlide(index) {
      const { slider, item } = this.$refs;
      console.log(this.$refs);
      if (item) {
        const slideWidth = parseInt(getComputedStyle(item[this.slideIndex]).getPropertyValue('width'), 10);
        this.slideIndex = index;
        this.sliderPosition = -(slideWidth * index);
        slider.style.transform = `translateX(${this.sliderPosition}px)`;
      }
    },
    async fetchReadmeCurrentSlide() {
      const { id, owner, name } = this.popularRepo[this.slideIndex];

      this.loading = true;
      try {
        await this.fetchReadme({ id, owner: owner.login, repo: name });
      } catch (e) {
        console.log(e);
        throw e;
      } finally {
        this.loading = false;
      }
    },
    async handleSlide(slideNum) {
      this.moveSlide(slideNum);
      await this.fetchReadmeCurrentSlide();
    },
    handleFollow() {
      const { id, owner, name } = this.popularRepo[this.slideIndex];

      console.log(id, owner, name);
    },
  },
  async mounted() {
    this.$nextTick(async () => {
      await this.fetchPopularRepo();
      if (this.initSlide) {
        await this.handleSlide(this.initSlide);
      }
      await this.fetchReadmeCurrentSlide();
    });
  },
};
</script>

<style lang="scss">
.stories-container {
  height: 660px;
  position: relative;
}

.stories-slider {
  &__list {
    display: flex;
    align-items: center;
    width: 4000px;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    transform: translateX(0);
    transition: transform .4s;
  }
}
</style>
