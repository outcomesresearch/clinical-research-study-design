import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

export function useResponsive() {
  const windowWidth = ref(window.innerWidth);

  const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', updateWindowWidth);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWindowWidth);
  });

  const isMobile = computed(() => windowWidth.value <= 600);

  return { windowWidth, isMobile };
}
