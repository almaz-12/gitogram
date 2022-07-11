<template>
  <div class="card">
    <div class="card-title">{{title}}</div>
    <div class="card-content">{{content}}</div>
    <div class="card-info">
      <ul class="info-list">
        <li class="info-item">
          <div class="info-item-icon">Star</div>
          <div class="info-item-text">{{star}}</div>
        </li>
        <li class="info-item">
          <div class="info-item-icon">Fork</div>
          <div class="info-item-text">{{fork}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardItem',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String
    },
    star: {
      type: String
    },
    fork: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
.card-title {
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 26px;
  color: #292929;
}
.card-content {
  margin-bottom: 37px;
}
.info-list {
  display: flex;
  align-items: center;
}
.info-item {
  display: flex;
  align-items: center;
}
</style>
