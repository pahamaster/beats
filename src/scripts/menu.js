const mesureWidth=item=>{
  const clientWidth=document.documentElement.clientWidth;
  const container=item.closest(".menu-section__list");
  const titles=container.find(".menu-section__item-title");
  const titlesWidth=titles.width() * titles.length;

  //const isMobile=window.matchMedia("(max-width: 768px)").matches;
  //if (isMobile) return clientWidth-titlesWidth
  if (clientWidth>=530+titlesWidth) return 530
  else if (clientWidth>=480)
  return clientWidth-titlesWidth; 
  else return clientWidth-titles.width();
}

const closeItems=container=>{
  const items=container.find('.menu-section__item');
  const itemsContent=container.find('.menu-section__item-content');
  items.removeClass('active');
  items.removeClass('passive');
  itemsContent.width(0);
}

const openIt=item=>{
  const hiddenContent=item.find(".menu-section__item-content");
  const reqWidth=mesureWidth(item);
  item.siblings().addClass("passive");
  item.addClass("active");
  hiddenContent.width(reqWidth);
}

$('.menu-section__item-title').click(e=>{
  const clientWidth=document.documentElement.clientWidth;
  const $this=$(e.currentTarget);
  const content=$this.next(".menu-section__item-content");
  const item=$this.closest(".menu-section__item");
  const container=$this.closest('.menu-section__list');
  if (item.hasClass("active"))
  {
    closeItems(container);
  }
  else{
    closeItems(container);
    openIt(item);
  }
})

$('.menu-section__item-close').click(e=>{
  e.preventDefault();
  const $this=$(e.currentTarget);
  const container=$this.closest('.menu-section__list');
  closeItems(container);
})