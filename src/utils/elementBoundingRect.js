export const getElementRect = (x, y, currentRef) => {
    let XPost = (
        (x -
            (currentRef.current.getBoundingClientRect().left +
                currentRef.current.getBoundingClientRect().width / 2)) / 2
    ).toFixed(5);

    let YPost = (
        (y -
            (currentRef.current.getBoundingClientRect().top +
                currentRef.current.getBoundingClientRect().height / 2)) / 2
    ).toFixed(5);

    return [XPost, YPost]
};

