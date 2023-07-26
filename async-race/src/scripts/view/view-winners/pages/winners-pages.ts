export async function handleWinnersPages(e: Event): Promise<void> {
  console.log(e);
}

// export async function handleGaragePages(e: Event): Promise<void> {
//   const target = getTarget(e);

//   const isNextButton = target.id === Selector.ButtonNext.slice(1);
//   const isPrevButton = target.id === Selector.ButtonPrev.slice(1);

//   if (isNextButton && isLastPage(View.Garage)) {
//     console.log("Last page");
//     return;
//   }

//   if (isPrevButton && isFirstPage(View.Garage)) {
//     console.log("First page");
//     return;
//   }

//   const currentPage = getCurrentPage(View.Garage);
//   const newPage = isNextButton ? currentPage + 1 : currentPage - 1;

//   await updateGarage(newPage);

//   console.log("Is race:", race);
// }
