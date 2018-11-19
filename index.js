import React, { Component } from 'react';
import Swiper from 'swiper';

export default class SwiperComponent extends Component<{}> {
	constructor(props){
        super(props);
        this.state = {
        	renderSwiperView: this.props.renderSwiperView || this._renderSwiperView.bind(this),
        	renderSwiperItemView: this.props.renderSwiperItemView || this._renderSwiperItemView.bind(this),
        	bindEventFun: this.props.bindEventFun || this._bindEventFun.bind(this),
        	initSwiperEle: this.props.initSwiperEle || '.react-swiper-container',
        	init: this.props.init || true,
        	direction: this.props.direction || 'horizontal',
        	touchEventsTarget: this.props.touchEventsTarget || 'container',
        	initialSlide: this.props.initialSlide || 0,
        	speed: this.props.speed || 300,
        	//
    		preventInteractionOnTransition: this.props.preventInteractionOnTransition || false,

    		// To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
    		edgeSwipeDetection: this.props.edgeSwipeDetection || false,
    		edgeSwipeThreshold: this.props.edgeSwipeThreshold || 20,

    		// Free mode
    		freeMode: this.props.freeMode || false,
    		freeModeMomentum: this.props.freeModeMomentum || true,
    		freeModeMomentumRatio: this.props.freeModeMomentumRatio || 1,
    		freeModeMomentumBounce: this.props.freeModeMomentumBounce || true,
    		freeModeMomentumBounceRatio: this.props.freeModeMomentumBounceRatio || 1,
    		freeModeMomentumVelocityRatio: this.props.freeModeMomentumVelocityRatio || 1,
    		freeModeSticky: this.props.freeModeSticky || false,
    		freeModeMinimumVelocity: this.props.freeModeMinimumVelocity || 0.02,

    		// Autoheight
    		autoHeight: this.props.autoHeight || false,

    		// Set wrapper width
    		setWrapperSize: this.props.setWrapperSize || false,

    		// Virtual Translate
    		virtualTranslate: this.props.virtualTranslate || false,

    		// Effects
    		effect: this.props.effect || 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

    		// Breakpoints
    		breakpoints: this.props.breakpoints || undefined,
    		breakpointsInverse: this.props.breakpointsInverse || false,

    		// Slides grid
    		spaceBetween: this.props.spaceBetween || 0,
    		slidesPerView: this.props.slidesPerView || 1,
    		slidesPerColumn: this.props.slidesPerColumn || 1,
    		slidesPerColumnFill: this.props.slidesPerColumnFill || 'column',
    		slidesPerGroup: this.props.slidesPerGroup || 1,
    		centeredSlides: this.props.centeredSlides || false,
    		slidesOffsetBefore: this.props.slidesOffsetBefore || 0,
    		slidesOffsetAfter: this.props.slidesOffsetAfter || 0,
    		normalizeSlideIndex: this.props.normalizeSlideIndex || true,
    		centerInsufficientSlides: this.props.centerInsufficientSlides || false,

    		// Disable swiper and hide navigation when container not overflow
    		watchOverflow: this.props.watchOverflow || false,

    		// Round length
    		roundLengths: this.props.roundLengths || false,

    		// Touches
    		touchRatio: this.props.touchRatio || 1,
    		touchAngle: this.props.touchAngle || 45,
    		simulateTouch: this.props.simulateTouch || true,
    		shortSwipes: this.props.shortSwipes || true,
    		longSwipes: this.props.longSwipes || true,
    		longSwipesRatio: this.props.longSwipesRatio || 0.5,
    		longSwipesMs: this.props.longSwipesMs || 300,
    		followFinger: this.props.followFinger || true,
    		allowTouchMove: this.props.allowTouchMove || true,
    		threshold: this.props.threshold || 0,
    		touchMoveStopPropagation: this.props.touchMoveStopPropagation || true,
    		touchStartPreventDefault: this.props.touchStartPreventDefault || true,
    		touchStartForcePreventDefault: this.props.touchStartForcePreventDefault || false,
    		touchReleaseOnEdges: this.props.touchReleaseOnEdges || false,

    		// Unique Navigation Elements
    		uniqueNavElements: this.props.uniqueNavElements || true,

    		// Resistance
    		resistance: this.props.resistance || true,
    		resistanceRatio: this.props.resistanceRatio || 0.85,

    		// Progress
    		watchSlidesProgress: this.props.watchSlidesProgress || false,
    		watchSlidesVisibility: this.props.watchSlidesVisibility || false,

    		// Cursor
    		grabCursor: this.props.grabCursor || false,

    		// Clicks
    		preventClicks: this.props.preventClicks || true,
    		preventClicksPropagation: this.props.preventClicksPropagation || true,
    		slideToClickedSlide: this.props.slideToClickedSlide || false,

    		// Images
    		preloadImages: this.props.preloadImages || true,
    		updateOnImagesReady: this.props.updateOnImagesReady || true,

    		// loop
    		loop: this.props.loop || false,
    		loopAdditionalSlides: this.props.loopAdditionalSlides || 0,
    		loopedSlides: this.props.loopedSlides || null,
    		loopFillGroupWithBlank: this.props.loopFillGroupWithBlank || false,

    		// Swiping/no swiping
    		allowSlidePrev: this.props.allowSlidePrev || true,
    		allowSlideNext: this.props.allowSlideNext || true,
    		swipeHandler: this.props.swipeHandler || null, // '.swipe-handler',
    		noSwiping: this.props.noSwiping || true,
    		noSwipingClass: this.props.noSwipingClass || 'swiper-no-swiping',
    		noSwipingSelector: this.props.noSwipingSelector || null,

    		// Passive Listeners
    		passiveListeners: this.props.passiveListeners || true,

    		// NS
    		containerModifierClass: this.props.containerModifierClass || 'swiper-container-', // NEW
    		slideClass: this.props.slideClass || 'swiper-slide',
    		slideBlankClass: this.props.slideBlankClass || 'swiper-slide-invisible-blank',
    		slideActiveClass: this.props.slideActiveClass || 'swiper-slide-active',
    		slideDuplicateActiveClass: this.props.slideDuplicateActiveClass || 'swiper-slide-duplicate-active',
    		slideVisibleClass: this.props.slideVisibleClass || 'swiper-slide-visible',
    		slideDuplicateClass: this.props.slideDuplicateClass || 'swiper-slide-duplicate',
    		slideNextClass: this.props.slideNextClass || 'swiper-slide-next',
    		slideDuplicateNextClass: this.props.slideDuplicateNextClass || 'swiper-slide-duplicate-next',
    		slidePrevClass: this.props.slidePrevClass || 'swiper-slide-prev',
    		slideDuplicatePrevClass: this.props.slideDuplicatePrevClass || 'swiper-slide-duplicate-prev',
			wrapperClass: this.props.wrapperClass || 'swiper-wrapper',

			// Callbacks
			runCallbacksOnInit: this.props.runCallbacksOnInit || true,
        }
    }
    componentDidMount (){
    	let self = this;
    	let playSwiper = new Swiper(self.state.initSwiperEle, {
    		init: self.state.init,
        	direction: self.state.direction,
            touchEventsTarget : self.state.touchEventsTarget,
            initialSlide:self.state.initialSlide,
            speed: self.state.speed,

            preventInteractionOnTransition: self.state.preventInteractionOnTransition,

            edgeSwipeDetection: self.state.edgeSwipeDetection,
            edgeSwipeThreshold: self.state.edgeSwipeThreshold,

            freeMode: self.state.freeMode,
            freeModeMomentum: self.state.freeModeMomentum,
            freeModeMomentumRatio: self.state.freeModeMomentumRatio,
            freeModeMomentumBounce: self.state.freeModeMomentumBounce,

            freeModeMomentumBounceRatio: self.state.freeModeMomentumBounceRatio,
            freeModeMomentumVelocityRatio: self.state.freeModeMomentumVelocityRatio,
            freeModeSticky: self.state.freeModeSticky,
            freeModeMinimumVelocity: self.state.freeModeMinimumVelocity,

            autoHeight: self.state.autoHeight,

            setWrapperSize: self.state.setWrapperSize,
            virtualTranslate: self.state.virtualTranslate,

            effect: self.state.effect,

            breakpoints: self.state.breakpoints,
            breakpointsInverse: self.state.breakpointsInverse,

            spaceBetween: self.state.spaceBetween,
            slidesPerView: self.state.slidesPerView,
            slidesPerColumn: self.state.slidesPerColumn,
            slidesPerColumnFill: self.state.slidesPerColumnFill,
            slidesPerGroup: self.state.slidesPerGroup,
            centeredSlides: self.state.centeredSlides,

            slidesOffsetBefore: self.state.slidesOffsetBefore,
            slidesOffsetAfter: self.state.slidesOffsetAfter,
            normalizeSlideIndex: self.state.normalizeSlideIndex,
            centerInsufficientSlides: self.state.centerInsufficientSlides,

            watchOverflow: self.state.watchOverflow,

            roundLengths: self.state.roundLengths,

            touchRatio: self.state.touchRatio,
            touchAngle: self.state.touchAngle,
            simulateTouch: self.state.simulateTouch,
            shortSwipes: self.state.shortSwipes,
            longSwipes: self.state.longSwipes,
            longSwipesRatio: self.state.longSwipesRatio,
            longSwipesMs: self.state.longSwipesMs,
            followFinger: self.state.followFinger,
            allowTouchMove: self.state.allowTouchMove,
            threshold: self.state.threshold,
            touchMoveStopPropagation: self.state.touchMoveStopPropagation,
            touchStartPreventDefault: self.state.touchStartPreventDefault,
            touchStartForcePreventDefault: self.state.touchStartForcePreventDefault,
            touchReleaseOnEdges: self.state.touchReleaseOnEdges,

            uniqueNavElements: self.state.uniqueNavElements,

            resistance: self.state.resistance,
            resistanceRatio: self.state.resistanceRatio,

            watchSlidesProgress: self.state.watchSlidesProgress,
            watchSlidesVisibility: self.state.watchSlidesVisibility,

            grabCursor: self.state.grabCursor,

            preventClicks: self.state.preventClicks,
            preventClicksPropagation: self.state.preventClicksPropagation,
            slideToClickedSlide: self.state.slideToClickedSlide,

			preloadImages: self.state.preloadImages,
            updateOnImagesReady: self.state.updateOnImagesReady,

            loop: self.state.loop,
            loopAdditionalSlides: self.state.loopAdditionalSlides,
            loopedSlides: self.state.loopedSlides,
            loopFillGroupWithBlank: self.state.loopFillGroupWithBlank,

            allowSlidePrev: self.state.allowSlidePrev,
            allowSlideNext: self.state.allowSlideNext,
            swipeHandler: self.state.swipeHandler,
            noSwiping: self.state.noSwiping,
            noSwipingClass: self.state.noSwipingClass,
            noSwipingSelector: self.state.noSwipingSelector,

            passiveListeners: self.state.passiveListeners,

            containerModifierClass: self.state.containerModifierClass,
            slideClass: self.state.slideClass,
            slideBlankClass: self.state.slideBlankClass,
            slideActiveClass: self.state.slideActiveClass,
            slideDuplicateActiveClass: self.state.slideDuplicateActiveClass,
            slideVisibleClass: self.state.slideVisibleClass,
            slideDuplicateClass: self.state.slideDuplicateClass,
            slideNextClass: self.state.slideNextClass,
            slideDuplicateNextClass: self.state.slideDuplicateNextClass,
            slidePrevClass: self.state.slidePrevClass,
            slideDuplicatePrevClass: self.state.slideDuplicatePrevClass,
            wrapperClass: self.state.wrapperClass,

            runCallbacksOnInit: self.state.runCallbacksOnInit,
            on:{
            	click: function(event){
            		self.state.bindEventFun(event);
            	},
                sliderMove: function(event){
                	self.state.bindEventFun(event);
                },
            },
        });
    }
    _bindEventFun(event){
    	console.log({event: event})
    }
    render(){
        let swiperView = this.state.renderSwiperView();
        return swiperView;
    }
    _renderSwiperView() {
    	let style = {
        	'width': '80%',
        	'marginLeft': '16px'
        }
    	return (
            <div class="swiper-container react-swiper-container" key="swiper">
                <div class="swiper-wrapper">
                    {
                    	this.state.renderSwiperItemView(style)
                    }
                </div>
            </div>
        );
    }
    _renderSwiperItemView(style) {
    	let itemList = [1,2,3,4,5,6,7];
    	let content = [];
    	itemList.forEach(function(item,index){
    		content.push(
	    		<div class="swiper-slide" style={style} key={index}>
	                swiper-slide {item}
	            </div>
    		)
    	})
    	return content;
    }
}
