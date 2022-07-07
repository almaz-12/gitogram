<template>
  <div>
    <PageHeader>
      <template #top>
        <Logo/>
        <ul class="icons">
          <div class="icon">
            <Icon name="Home"/>
          </div>
          <div class="icon">
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
<style scoped>
.icon {
  color: red;
}
</style>
