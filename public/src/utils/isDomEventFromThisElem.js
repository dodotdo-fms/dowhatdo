function isDomEventFromThisElem(thisElem, event) {
    const $target = $(event.target);

    const isTargetSameWithMe = $target.is(thisElem);
    const isTargetMyChildren = $(thisElem).find(event.target).length !== 0;

    return isTargetSameWithMe || isTargetMyChildren;
}

export default isDomEventFromThisElem;
