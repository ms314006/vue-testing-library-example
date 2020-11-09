<template>
  <div>
    <h1>This Is A Counter Page</h1>
    <span>目前點擊：{{ $store.getters.count }}</span>
    <button
      type="button"
      @click="$store.dispatch('increment')"
    >
      點我加一
    </button>
  </div>
</template>
