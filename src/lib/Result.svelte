<script lang="ts">
  import toPrice from "../utils/toPrice";

  export let startHour: string;
  export let finishHour: string;

  const startHourSplitted = startHour.split(":").map((item) => parseInt(item));
  const finishHourSplitted = finishHour
    .split(":")
    .map((item) => parseInt(item));

  const startToDate = new Date();
  const finishToDate = new Date();
  const workedHours = new Date();

  startToDate.setHours(startHourSplitted[0], startHourSplitted[1]);
  finishToDate.setHours(finishHourSplitted[0], finishHourSplitted[1]);

  workedHours.setHours(finishToDate.getHours() - startToDate.getHours());

  const madeExtra = workedHours.getHours() > 7;

  let normalHours = workedHours.getHours();
  let extraHours = 0;

  if (madeExtra) {
    extraHours = workedHours.getHours() - 7;
    normalHours = workedHours.getHours() - extraHours;
  }

  const normalHourPrice = 14.59;
  const extraHourPrice = 21.89;

  const normalHourTotal = normalHours * normalHourPrice;
  const extraHourTotal = extraHours * extraHourPrice;

  const totalHoursBRL = toPrice(normalHourTotal + extraHourTotal);
  const normalHoursBRL = toPrice(normalHourTotal);
  const extraHoursBRL = toPrice(extraHourTotal);
</script>

<div class="flex flex-col">
  <h1 class="flex flex-col text-4xl font-bold">
    {totalHoursBRL}
    <span class="font-normal text-gray-400">
      {`(${normalHoursBRL} + ${extraHoursBRL})`}
    </span>
  </h1>
  <div class="mt-4">
    Você trabalhou por {workedHours.getHours()} horas!
    {#if madeExtra}
      <span>Sendo {normalHours} horas normais</span>
      <span class="italic">e {extraHours} hora(s) extras</span>
    {/if}
  </div>
</div>
