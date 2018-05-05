<template>
  <div class="cd-timeline-block">
    <div class="cd-timeline-img" :style="{ background: logoBg}">
      <slot name="picture"></slot>
    </div>
    <Bounce class="cd-timeline-content" :direction="direction">
      <h3 class="py-3 text-center" :style="{ background: cardHeaderBg}"> {{title}}</h3>
      <hr>
      <p class="font-weight-light m-0">{{length}} - {{price}}</p>
      <p>{{description}}</p>
      <slot class="py-2" name="link"></slot>
    </Bounce>
  </div>
</template>
<script>
import Bounce from "~/components/Bounce.vue";

export default {
  components: { Bounce },
  props: {
    title: {
      type: String,
      required: true
    },
    length: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    logoBg: {
      type: String,
      required: true
    },
    cardHeaderBg: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      required: true,
      validator: function(value) {
        // The value must match one of these strings
        return ["in", "left", "right"].indexOf(value) !== -1;
      }
    }
  }
};
</script>
<style>
/*timeline*/

.cd-container {
  width: 90%;
  max-width: 1170px;
  margin: 0 auto;
}

.cd-container::after {
  content: "";
  display: table;
  clear: both;
}

#cd-timeline {
  position: relative;
  padding: 2em 0;
  margin-top: 3em;
  margin-bottom: 3em;
}

#cd-timeline::before {
  /* this is the vertical line */
  content: "";
  position: absolute;
  top: 0;
  left: 33px;
  height: 100%;
  width: 4px;
  background: #ffffff;
}

@media only screen and (min-width: 1170px) {
  #cd-timeline {
    margin-top: 3em;
    margin-bottom: 3em;
  }
  #cd-timeline::before {
    left: 50%;
    margin-left: -2px;
  }
}

.cd-timeline-block {
  position: relative;
  margin: 2em 0;
}

.cd-timeline-block::after {
  clear: both;
  content: "";
  display: table;
}

.cd-timeline-block:first-child {
  margin-top: 0;
}

.cd-timeline-block:last-child {
  margin-bottom: 0;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-block {
    margin: 4em 0;
  }
  .cd-timeline-block:first-child {
    margin-top: 0;
  }
  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
}

.cd-timeline-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08),
    0 3px 0 4px rgba(0, 0, 0, 0.05);
}

.cd-timeline-img img {
  display: block;
  height: 50px;
  position: relative;
  left: 50%;
  top: 50%;
  margin-left: -25px;
  margin-top: -25px;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-img {
    width: 90px;
    height: 90px;
    left: 50%;
    margin-left: -45px;
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
}

.cd-timeline-content {
  position: relative;
  margin-left: 90px;
  background: #ffffff;
  border-radius: 0.25em;
  padding: 1em;
  box-shadow: 0 3px 0 #d7e4ed;
}

.cd-timeline-content::after {
  clear: both;
  content: "";
  display: table;
}

.cd-timeline-content .cd-read-more,
.cd-timeline-content .cd-date {
  display: inline-block;
}

.cd-timeline-content p {
  margin: 1em 0;
  line-height: 1.6;
  letter-spacing: 1px;
}

.cd-timeline-content .cd-date {
  float: left;
  padding: 0.8em 0;
  opacity: 0.7;
}

.cd-timeline-content::before {
  content: "";
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid #ffffff;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-content {
    margin-left: 0;
    padding: 1.6em;
    width: 45%;
  }
  .cd-timeline-content::before {
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: #ffffff;
  }
  .cd-timeline-content .cd-read-more {
    float: left;
  }
  .cd-timeline-content .cd-date {
    position: absolute;
    width: 100%;
    left: 122%;
    top: 6px;
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
    top: 24px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: #ffffff;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
    left: auto;
    right: 122%;
    text-align: right;
  }
}

@media (max-width: 360px) {
  .cd-timeline-content h3 {
    font-size: 1rem;
  }
}
</style>
