<template>
  <div>
    <PageHeader>
      <template #top>
        <div class="logo">
          <Logo/>
        </div>
        <ul class="buttons">
          <div class="buttons-item buttons-item_home">
            <Icon name="Home"/>
          </div>
          <div class="button-item buttons-item_logout">
            <Icon name="Logout"/>
          </div>
        </ul>
      </template>
      <template #bottom>Bottom</template>
    </PageHeader>
    <FeedItem/>
  </div>
</template>
<script>
import { PageHeader } from '../../components/pageHeader'
import { Logo } from '../../components/logo'
import { FeedItem } from '../../components/feed'
import { Icon } from '../../icons'
export default {
  name: 'Feeds',
  components: {
    PageHeader,
    Icon,
    FeedItem,
    Logo
  }
}
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
    color: #000;

    &_home {
      width: 24px;
      height: 25px;
    }

    &_logout {
      width: 25px;
      height: 20px;
    }
  }
}

</style>
