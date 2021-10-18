<template>
<section class="timeline profile-infos">

    <!-- VERTICAL MARGIN (necessary for the timeline effect) -->
    <div class="line row timeline-margin">
        <div class="content-wrap">
            <div class="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" style="height: 80px;"></div>
            <div class="col-md-2 timeline-progress hidden-sm hidden-xs full-height" style="height: 80px;"></div>
            <div class="col-md-9 bg1 full-height" style="height: 80px;"></div>
        </div>
    </div>
    <!-- /VERTICAL MARGIN -->

    <!-- SECTION TITLE -->
    <div class="line row">
        <!-- Margin Collums (necessary for the timeline effect) -->
        <div class="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" style="height: 70px;"></div>
        <div class="col-md-2 timeline-progress hidden-sm hidden-xs timeline-title full-height" style="height: 70px;">
        </div>
        <!-- /Margin Collums -->
        <!-- Item Content -->
        <div class="col-md-8 content-wrap bg1">
            <!-- Section title -->
            <h2 class="section-title">Profile</h2>
            <!-- /Section title -->
        </div>
        <!-- /Item Content -->
        <!-- Margin Collum-->
        <div class="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" style="height: 70px;"></div>
        <!-- / Margin Collum-->
    </div>
    <!-- /SECTION TITLE -->

    <!-- SECTION ITEM -->
    <div class="line row">
        <!-- Margin Collums (necessary for the timeline effect) -->
        <div class="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" style="height: 82px;"></div>
        <div class="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " style="height: 82px;"></div>
        <!-- /Margin Collums -->
        <!-- Item Content -->
        <div class="col-md-8 content-wrap bg1">
            <div class="line-content">
                <!-- Subtitle -->
                <h3 class="section-item-title-1">Full Name</h3>
                <!-- /Subtitle -->
                <!-- content -->
                <p>James Willians Rex</p>
                <!-- /Content -->
            </div>
        </div>
        <!-- /Item Content -->
        <!-- Margin Collum-->
        <div class="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" style="height: 82px;"></div>
        <!-- /Margin Collum-->
    </div>
    <!-- /SECTION ITEM -->

    <!-- SECTION ITEM -->
    <div class="line row">
        <!-- Margin Collums (necessary for the timeline effect) -->
        <div class="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" style="height: 82px;"></div>
        <div class="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " style="height: 82px;"></div>
        <!-- /Margin Collums -->
        <!-- Item Content -->
        <div class="col-md-8 content-wrap bg1">
            <div class="line-content">
                <!-- Subtitle -->
                <h3 class="section-item-title-1">Born</h3>
                <!-- /Subtitle -->
                <!-- content -->
                <p>30 Aug 1991 - Austin, U.S.A</p>
                <!-- /Content -->
            </div>
        </div>
        <!-- /Item Content -->
        <!-- Margin Collum-->
        <div class="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" style="height: 82px;"></div>
        <!-- /Margin Collum-->
    </div>
    <!-- /SECTION ITEM -->

    <!-- SECTION ITEM -->
    <div class="line row">
        <!-- Margin Collums (necessary for the timeline effect) -->
        <div class="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" style="height: 82px;"></div>
        <div class="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " style="height: 82px;"></div>
        <!-- /Margin Collums -->
        <!-- Item Content -->
        <div class="col-md-8 content-wrap bg1">
            <div class="line-content">
                <!-- Subtitle -->
                <h3 class="section-item-title-1">Email</h3>
                <!-- /Subtitle -->
                <!-- content -->
                <p>john@dotrex.co</p>
                <!-- /Content -->
            </div>
        </div>
        <!-- /Item Content -->
        <!-- Margin Collum -->
        <div class="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" style="height: 82px;"></div>
        <!-- /Margin Collums -->
    </div>
    <!-- /SECTION ITEM -->

    <!-- SECTION ITEM -->
    <div class="line row">
        <!-- Margin Collums (necessary for the timeline effect) -->
        <div class="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" style="height: 82px;"></div>
        <div class="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " style="height: 82px;"></div>
        <!-- Margin Collums (necessary for the timeline effect) -->
        <!-- Item Content -->
       
        <!-- /Item Content -->
        <!-- Margin Collum -->
        <div class="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" style="height: 82px;"></div>
        <!-- /Margin Collum -->
    </div>
    <!-- /SECTION ITEM -->
</section>
</template>

<script>
export default {
    props:{
        profileInfo:{
            type:Object,
        }
    }
}
</script>

<style>

</style>
