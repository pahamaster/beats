const openItem=item=>{
  const container=item.closest(".team__item");
  const contentBlock=container.find(".team__content");
  const textBlock=contentBlock.find(".team__content-block");
  const reqHeight=textBlock.height();
  
  contentBlock.height(reqHeight);
  container.addClass("active");
}

const closeEveryItem=container=>{
  const items=container.find('.team__content');
  const itemContainer=container.find(".team__item");

  itemContainer.removeClass("active");
  items.height("0px");
}


$('.team__name').click(e=>{
  e.preventDefault();
  const $this=$(e.currentTarget);
  const container=$this.closest('.team__list');
  const elemContainer=$this.closest(".team__item");
  
  if (elemContainer.hasClass("active")){
    closeEveryItem(container);
  } else {
    closeEveryItem(container);
    openItem($this);
  }

  
  
})