<template>
  <div
    class="bg-white"
    :class="
      !isExpanded && rounded ? 'mb-0' : !isExpanded && !rounded ? 'mb-0' : ''
    "
  >
    <header
      :class="[
        'cursor-pointer flex flex-col justify-between relative',
        extraClass,
        !isExpanded && rounded ? 'bg-gray-100' : 'bg-gray-100',
      ]"
      @click="isExpanded = !isExpanded"
    >
      <slot name="header" />
      <svg
        v-if="!isExpanded"
        class="w-5 mr-auto absolute top-3 right-4"
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 5.5L0.5 10.2631L0.5 0.73686L8 5.5Z" fill="#6B7280" />
      </svg>
      <svg
        v-else
        class="w-5 absolute top-3 right-4"
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.9365 7.5L0.186031 -8.97232e-07L9.68698 -6.44184e-08L4.9365 7.5Z"
          fill="#6B7280"
        />
      </svg>
    </header>
    <main v-if="isExpanded" class="bg-white text-gray-400">
      <slot name="content" />
    </main>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
      default: null,
    },
    expandable: {
      type: Boolean,
      required: false,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: true,
    },
    headerClass: {
      type: String,
      default: "  bg-primary-100",
    },
    extraClass: {
      type: String,
      default: "",
    },
    borderStyle: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  watch: {
    expandable(value) {
      this.isExpanded = value;
    },
  },
  mounted() {
    this.isExpanded = this.expandable;
  },
};
</script>
