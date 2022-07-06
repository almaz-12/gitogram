<template>
  <div class="toggler">
    <button class="toggler-btn">
      <span class="toggler-text">Hide issues</span>
      <span class="toggler-icon">
        <Icon name="Toggler"/>
      </span>
    </button>
  </div>
</template>

<script>
import { Icon } from '../../icons'

export default {
  name: 'Toggler',
  components: {
    Icon
  }
}
</script>
