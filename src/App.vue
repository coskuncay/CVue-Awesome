<template>
<div class="main-page text-center position-relative" ref="content">
    <div class="main-page-inner mx-auto text-start bg-white shadow-lg">
        <!-- <button class="btn" @click="exportPdf()" v-if="downloadButtonVisible">Export PDF</button> -->
        <Intro :introInfo="data.introInfo" :contactInfo="data.contactInfo" :socialMediaInfo="data.socialMediaInfo" />
        <div class="p-5">
            <Summary :summaryInfo="data.summaryInfo" />
            <div class="row">
                <div class="col-lg-8">
                    <Experience :experinceInfo="data.experinceInfo" />
                </div>
                <div class="col-lg-4">
                    <Education :educationInfo="data.educationInfo" />
                    <Skill :skillInfo="data.skillInfo" :otherSkillInfo="data.otherSkillInfo" :proSkillInfo="data.proSkillInfo" />
                    <!-- <Language :languageInfo="data.languageInfo" /> -->
                    <Interest :interestInfo="data.interestInfo" />
                    <Certificate :certificateInfo="data.certificateInfo" />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <Language :languageInfo="data.languageInfo" />
                </div>
                <div class="col-lg-8">
                    <Volunteer :volunteerInfo="data.volunteerInfo" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import jsPDF from 'jspdf'
import domtoimage from "dom-to-image";

import Intro from '@/components/Intro.vue'
import Summary from '@/components/Summary.vue'
import Profile from '@/components/Profile.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import Education from '@/components/Education.vue'
import Experience from '@/components/Experience.vue'
import Language from '@/components/Language.vue'
import Interest from '@/components/Interest.vue'
import Certificate from '@/components/Certificate.vue'
import Volunteer from '@/components/Volunteer.vue'
import Skill from '@/components/Skill.vue'

import data from './data'

export default {
    components: {
        Intro,
        Summary,
        Profile,
        SocialMedia,
        Education,
        Experience,
        Language,
        Interest,
        Certificate,
        Skill,
        Volunteer
    },
    data() {
        return {
            data: data,
            downloadButtonVisible: true,
        }
    },
    methods: {
        exportPdf() {
            this.downloadButtonVisible = false
            /** WITH CSS */
            domtoimage
                .toPng(this.$refs.content)
                .then(function (dataUrl) {
                    var img = new Image();
                    img.src = dataUrl;
                    const doc = new jsPDF({
                        orientation: "portrait",
                        
                        // unit: "pt",
                        format: [750, 500]
                    });
                    doc.addImage(img, "JPEG", 20, 20);
                    const date = new Date();
                    const filename =
                        "CVue_Awesome".pdf;
                    doc.save(filename);
                })
                .catch(function (error) {
                    console.error("oops, something went wrong!", error);
                });
        }
    }
}
</script>

<style>
@import './assets/css/font-awesome/css/font-awesome.css';
</style>
