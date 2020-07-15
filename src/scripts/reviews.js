const findBlockByAlias=alias=>{
  return $(".reviews__display-inner").filter((ndx, item)=>{
    return $(item).attr("data-linked")===alias
  })
}

$(".interactive-avatar__link").click(e=>{
  //console.log(e.currentTarget);
  e.preventDefault();
  const $this=$(e.currentTarget);

  const target=$this.attr("data-open");
  const itemToShow=findBlockByAlias(target);
  itemToShow.addClass("active").siblings().removeClass("active");

  const curItem=$this.closest(".reviews__switcher-item");

  curItem.addClass("active").siblings().removeClass("active");
})