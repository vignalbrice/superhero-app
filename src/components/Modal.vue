<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal" style="">
          <slot name="modal-header"></slot>
          <slot name="modal-content"></slot>
          <slot name="modal-footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {};
  },
  methods: {
    showModal() {
      this.show = !this.show;
    },
    closeModal() {
      this.show = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  .modal-wrapper {
    vertical-align: middle;
    display: table-cell;
    .modal {
      position: relative;
      width: 500px;
      margin: auto;
      max-width: 100%;
      padding: 10px;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;
    }
  }
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal,
.modal-leave-active .modal {
  -webkit-transform: scale(1);
  transform: scale(1);
}
</style>
