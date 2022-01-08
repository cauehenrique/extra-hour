<script lang="ts">
  import HourInput from "$lib/HourInput.svelte";
  import Result from "$lib/Result.svelte";

  enum Progress {
    START,
    FINISH,
    RESULT,
  }

  let startHour: string;
  let finishHour: string;

  let currentStep = Progress.START;
</script>

<div
  class="flex flex-col justify-center max-w-4xl min-h-screen p-8 mx-auto text-center"
>
  {#if currentStep === Progress.START}
    <HourInput
      requestName="iniciou"
      onNext={() => (currentStep = Progress.FINISH)}
      bind:hour={startHour}
    />
  {:else if currentStep === Progress.FINISH}
    <HourInput
      requestName="finalizou"
      onNext={() => (currentStep = Progress.RESULT)}
      bind:hour={finishHour}
    />
  {:else}
    <Result {startHour} {finishHour} />
  {/if}
</div>
