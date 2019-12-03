<template>
  <div>
    <p>ここはコンタクトページです。</p>
    <form>
      <input class="input" v-model="nickname" placeholder="お名前">
      <p>あなたの名前: {{ nickname }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'nickname',
  data () {
    return {
      nickname: ''
    }
  }
}
</script>

<style>
</style>
