//CLOCK FUNCTION
$(function () {
    FlipClock.Lang.Custom = { days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds' };
    var opts = {
        clockFace: 'DailyCounter',
        countdown: false,
        language: 'Custom'
    };
    opts.classes = {
        active: 'flip-clock-active',
        before: 'flip-clock-before',
        divider: 'flip-clock-divider',
        dot: 'flip-clock-dot',
        label: 'flip-clock-label',
        flip: 'flip',
        play: 'play',
        wrapper: 'flip-clock-small-wrapper'
    };
    var countdown = 0;
    //1521851280 - ((new Date().getTime())/1000); // from: 03/23/2018 08:28 pm -0400
    //countdown = Math.max(1, countdown);
    $('.clock-builder-output').FlipClock(countdown, opts);
});