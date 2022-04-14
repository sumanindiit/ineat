export const insertView = (views, view, direction) => {
    if (direction === 'root') {
        return setRoot(views, view);
    }
    else if (direction === 'forward') {
        return setForward(views, view);
    }
    else {
        return setBack(views, view);
    }
};
const setRoot = (views, view) => {
    views = views.filter(v => v.stackId !== view.stackId);
    views.push(view);
    return views;
};
const ɵ0 = setRoot;
const setForward = (views, view) => {
    const index = views.indexOf(view);
    if (index >= 0) {
        views = views.filter(v => v.stackId !== view.stackId || v.id <= view.id);
    }
    else {
        views.push(view);
    }
    return views;
};
const ɵ1 = setForward;
const setBack = (views, view) => {
    const index = views.indexOf(view);
    if (index >= 0) {
        return views.filter(v => v.stackId !== view.stackId || v.id <= view.id);
    }
    else {
        return setRoot(views, view);
    }
};
const ɵ2 = setBack;
export const getUrl = (router, activatedRoute) => {
    const urlTree = router.createUrlTree(['.'], { relativeTo: activatedRoute });
    return router.serializeUrl(urlTree);
};
export const isTabSwitch = (enteringView, leavingView) => {
    if (!leavingView) {
        return true;
    }
    return enteringView.stackId !== leavingView.stackId;
};
export const computeStackId = (prefixUrl, url) => {
    if (!prefixUrl) {
        return undefined;
    }
    const segments = toSegments(url);
    for (let i = 0; i < segments.length; i++) {
        if (i >= prefixUrl.length) {
            return segments[i];
        }
        if (segments[i] !== prefixUrl[i]) {
            return undefined;
        }
    }
    return undefined;
};
export const toSegments = (path) => {
    return path
        .split('/')
        .map(s => s.trim())
        .filter(s => s !== '');
};
export const destroyView = (view) => {
    if (view) {
        // TODO lifecycle event
        view.ref.destroy();
        view.unlistenEvents();
    }
};
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2stdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uaWMvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvbmF2aWdhdGlvbi9zdGFjay11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFrQixFQUFFLElBQWUsRUFBRSxTQUEwQixFQUFFLEVBQUU7SUFDNUYsSUFBSSxTQUFTLEtBQUssTUFBTSxFQUFFO1FBQ3hCLE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM3QjtTQUFNLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtRQUNsQyxPQUFPLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDaEM7U0FBTTtRQUNMLE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM3QjtBQUNILENBQUMsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQUFHLENBQUMsS0FBa0IsRUFBRSxJQUFlLEVBQUUsRUFBRTtJQUN0RCxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUM7O0FBRUYsTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFrQixFQUFFLElBQWUsRUFBRSxFQUFFO0lBQ3pELE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1FBQ2QsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLElB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ZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQW5pbWF0aW9uQnVpbGRlciwgTmF2RGlyZWN0aW9uLCBSb3V0ZXJEaXJlY3Rpb24gfSBmcm9tICdAaW9uaWMvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBpbnNlcnRWaWV3ID0gKHZpZXdzOiBSb3V0ZVZpZXdbXSwgdmlldzogUm91dGVWaWV3LCBkaXJlY3Rpb246IFJvdXRlckRpcmVjdGlvbikgPT4ge1xuICBpZiAoZGlyZWN0aW9uID09PSAncm9vdCcpIHtcbiAgICByZXR1cm4gc2V0Um9vdCh2aWV3cywgdmlldyk7XG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZm9yd2FyZCcpIHtcbiAgICByZXR1cm4gc2V0Rm9yd2FyZCh2aWV3cywgdmlldyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNldEJhY2sodmlld3MsIHZpZXcpO1xuICB9XG59O1xuXG5jb25zdCBzZXRSb290ID0gKHZpZXdzOiBSb3V0ZVZpZXdbXSwgdmlldzogUm91dGVWaWV3KSA9PiB7XG4gIHZpZXdzID0gdmlld3MuZmlsdGVyKHYgPT4gdi5zdGFja0lkICE9PSB2aWV3LnN0YWNrSWQpO1xuICB2aWV3cy5wdXNoKHZpZXcpO1xuICByZXR1cm4gdmlld3M7XG59O1xuXG5jb25zdCBzZXRGb3J3YXJkID0gKHZpZXdzOiBSb3V0ZVZpZXdbXSwgdmlldzogUm91dGVWaWV3KSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gdmlld3MuaW5kZXhPZih2aWV3KTtcbiAgaWYgKGluZGV4ID49IDApIHtcbiAgICB2aWV3cyA9IHZpZXdzLmZpbHRlcih2ID0+IHYuc3RhY2tJZCAhPT0gdmlldy5zdGFja0lkIHx8IHYuaWQgPD0gdmlldy5pZCk7XG4gIH0gZWxzZSB7XG4gICAgdmlld3MucHVzaCh2aWV3KTtcbiAgfVxuICByZXR1cm4gdmlld3M7XG59O1xuXG5jb25zdCBzZXRCYWNrID0gKHZpZXdzOiBSb3V0ZVZpZXdbXSwgdmlldzogUm91dGVWaWV3KSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gdmlld3MuaW5kZXhPZih2aWV3KTtcbiAgaWYgKGluZGV4ID49IDApIHtcbiAgICByZXR1cm4gdmlld3MuZmlsdGVyKHYgPT4gdi5zdGFja0lkICE9PSB2aWV3LnN0YWNrSWQgfHwgdi5pZCA8PSB2aWV3LmlkKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc2V0Um9vdCh2aWV3cywgdmlldyk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVcmwgPSAocm91dGVyOiBSb3V0ZXIsIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgPT4ge1xuICBjb25zdCB1cmxUcmVlID0gcm91dGVyLmNyZWF0ZVVybFRyZWUoWycuJ10sIHsgcmVsYXRpdmVUbzogYWN0aXZhdGVkUm91dGUgfSk7XG4gIHJldHVybiByb3V0ZXIuc2VyaWFsaXplVXJsKHVybFRyZWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzVGFiU3dpdGNoID0gKGVudGVyaW5nVmlldzogUm91dGVWaWV3LCBsZWF2aW5nVmlldzogUm91dGVWaWV3IHwgdW5kZWZpbmVkKSA9PiB7XG4gIGlmICghbGVhdmluZ1ZpZXcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZW50ZXJpbmdWaWV3LnN0YWNrSWQgIT09IGxlYXZpbmdWaWV3LnN0YWNrSWQ7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVN0YWNrSWQgPSAocHJlZml4VXJsOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCwgdXJsOiBzdHJpbmcpID0+IHtcbiAgaWYgKCFwcmVmaXhVcmwpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGNvbnN0IHNlZ21lbnRzID0gdG9TZWdtZW50cyh1cmwpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGkgPj0gcHJlZml4VXJsLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHNlZ21lbnRzW2ldO1xuICAgIH1cbiAgICBpZiAoc2VnbWVudHNbaV0gIT09IHByZWZpeFVybFtpXSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCB0b1NlZ21lbnRzID0gKHBhdGg6IHN0cmluZykgPT4ge1xuICByZXR1cm4gcGF0aFxuICAgIC5zcGxpdCgnLycpXG4gICAgLm1hcChzID0+IHMudHJpbSgpKVxuICAgIC5maWx0ZXIocyA9PiBzICE9PSAnJyk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVzdHJveVZpZXcgPSAodmlldzogUm91dGVWaWV3IHwgdW5kZWZpbmVkKSA9PiB7XG4gIGlmICh2aWV3KSB7XG4gICAgLy8gVE9ETyBsaWZlY3ljbGUgZXZlbnRcbiAgICB2aWV3LnJlZi5kZXN0cm95KCk7XG4gICAgdmlldy51bmxpc3RlbkV2ZW50cygpO1xuICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWNrRXZlbnQge1xuICBlbnRlcmluZ1ZpZXc6IFJvdXRlVmlldztcbiAgZGlyZWN0aW9uOiBSb3V0ZXJEaXJlY3Rpb247XG4gIGFuaW1hdGlvbjogTmF2RGlyZWN0aW9uIHwgdW5kZWZpbmVkO1xuICB0YWJTd2l0Y2g6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVWaWV3IHtcbiAgaWQ6IG51bWJlcjtcbiAgdXJsOiBzdHJpbmc7XG4gIHN0YWNrSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHNhdmVkRGF0YT86IGFueTtcbiAgc2F2ZWRFeHRyYXM/OiBOYXZpZ2F0aW9uRXh0cmFzO1xuICB1bmxpc3RlbkV2ZW50czogKCkgPT4gdm9pZDtcbiAgYW5pbWF0aW9uQnVpbGRlcj86IEFuaW1hdGlvbkJ1aWxkZXI7XG59XG4iXX0=