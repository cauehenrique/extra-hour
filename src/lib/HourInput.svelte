<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let requestName: string;
  export let hour: string;
  export let onNext: () => void;

  let visible = false;

  onMount(() => {
    setTimeout(() => (visible = true), 300);
  });
</script>

{#if visible}
  <div class="flex flex-col items-center" transition:fade={{ duration: 300 }}>
    <h1 class="absolute w-[90%] text-5xl font-bold top-8">
      Quando você
      <span class="font-black text-blue-600">{requestName}</span>
      seu trabalho?
    </h1>

    <div class="flex flex-col w-full space-y-2">
      <div class="relative">
        <input
          type="time"
          class="block w-full px-4 py-3 text-2xl bg-white border border-gray-300 rounded-md shadow-sm appearance-none outline-blue-500"
          bind:value={hour}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="md:invisible absolute w-6 h-6 top-[18px] right-4 text-gray-500 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <button
        class="px-4 py-3 font-semibold text-white bg-blue-500 rounded-md hover:opacity-80 disabled:opacity-50"
        on:click={onNext}
        disabled={!hour}
      >
        Próximo
      </button>
    </div>
  </div>
{/if}
