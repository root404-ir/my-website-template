$(function () {
    $('.skill_progress_bar').waypoint(
        function () {
            $('.progress_bar').each(function () {
                $(this).animate({
                    width: $(this).attr('aria-valuenow') + "%"
                }, 800)
            })
            this.destroy()
        },
    )
    {
        offset: "bottom-in-view"
    }

})