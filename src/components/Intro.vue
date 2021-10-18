<template>
<section class="row pt-5">
    <div class="col-md-4">
        <div class="profile-pic">
            <img :src="getProfileImage()" alt="">
        </div>
    </div>
    <div class="col-md-7">
        <div class="row justify-content-center justify-content-md-between">
            <div class="col-auto">
                <h1 class="intro-title1">
                    <span class="color1 bold">{{introInfo.name}}</span></h1>
                <h2 class="intro-title2">
                    {{introInfo.title}}
                </h2>
                <ul class="intro-list-contact">
                    <li v-for="(contact,index) in contactInfo" :key="index">
                        <a class="text-link" :href="`${contact.link}`" >
                            <i :class="`fa fa-${contact.name} mb-2`" :style="`${contact.style}`"></i> <span> {{contact.context}}</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-auto">
                <ul class="intro-list-social">
                    <li v-for="(social,index) in socialMediaInfo" :key="index" :href="social.link">
                        <a class="text-link" :href="`${social.link}`" target="_blank" >
                            <i :class="`fa fa-${social.name} mb-2`" style="font-size: 20px;margin-right:10px"></i>
                            <span>{{social.displayName}}</span>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
        <!-- <p v-html="introInfo.description"></p> -->
    </div>
</section>
</template>

<script>
export default {
    props: {
        introInfo: {
            type: Object
        },
        contactInfo: {
            type: Object
        },
        socialMediaInfo: {
            type: Object
        }
    },
    methods: {
        getProfileImage() {
            return require("../assets/images/" + this.introInfo.image)
        }
    },

}
</script>

<style>

</style>
