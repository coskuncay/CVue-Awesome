<template>
<section class="mb-5">
    <h3 class="section-title" style="margin-left: 10px;">Skills</h3>
    <ul class="right-list">
        <b>Technical</b>
        <li class="right-list-item mb-2" v-for="(skill,index) in skillInfo" :key="index">
            <span>{{skill.name}} </span>
            <div class="progress skill-progress" style="background-color:#c0c0c0">
                <div class="progress-bar" role="progressbar" :style="`width: ${skill.rate}%`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </li>
        <div class="mb-2">
            <b>Others</b>
            <ul class="tech-list">
                <li style="display: inline-block;margin-right: 0.5rem;" v-for="(skill,index) in otherSkillInfo" :key="index">
                   {{skill}}
                    <!-- <span class="badge bg-secondary badge-pill p-2 mb-2">{{skill.name}}</span> -->
                </li>
            </ul>
        </div>
        <div>
            <b>Professional</b>
            <ul class="tech-list">
                <li style="margin-right: 0.5rem;" v-for="(skill,index) in proSkillInfo" :key="index">
                    {{skill}}
                </li>
            </ul>
        </div>
    </ul>
</section>
</template>

<script>
export default {
    props: {
        skillInfo: {
            type: Object
        },
        otherSkillInfo: {
            type: Object
        },
        proSkillInfo: {
            type: Object
        }
    }
}
</script>

<style>

</style>
