<template>
  <div>
    <PageHeader>
      <template #top>
        <div class="icon">
          <Icon name="Home"/>
        </div>
      </template>
      <template #bottom>Bottom</template>
    </PageHeader>
    </div>
</template>
<script>
import { PageHeader } from '../../components/page-header'
import { Icon } from '../../icons'
export default {
  name: 'Feeds',
  components: {
    PageHeader,
    Icon
  }
}
</script>
<style scoped>
.icon {
  color: red;
}
</style>
