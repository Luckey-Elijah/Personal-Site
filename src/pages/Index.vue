<template>
  <Layout>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">Elijah Luckey</div>
        <div class="text-green-700 leading-tight">is your friendly neighborhood developer.</div>
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image
          src="../../static/headshot-2.jpg"
          width="250"
          alt="Elijah Luckey Headshot"
          class="mx-auto sm:mx-0"
        />
      </div>
    </div>
    <!-- end hero -->

    <!-- Landing page paragraph -->
    <div class="container-inner mx-auto">
      <p class="text-lg sm:text-xl">
        Elijah Luckey is a student from Lakeland, Florida skilled in web, mobile, and desktop application development. To see what Elijah is working on now,
        check out his
        <a
          href="https://github.com/Luckey-Elijah/"
        >GitHub profile</a>.
        If you want to get in contact with him, you can either
        <a
          href="mailto:luckeyelijah112@gmail.com?subject=Hello%2C%20Elijah!&body=Hi%20Elijah%2C"
        >send him an email</a>
        directly or fill out the
        <a
          v-if="$route.path === '/'"
          href="/#contact"
          v-scroll-to="'#contact'"
        >contact form</a> form below.
      </p>

      <!-- The graphics -->
      <div class="flex justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image src="../../static/mind_map.svg" alt="browser" />
        </div>
        <div class="w-1/2 px-8 hidden sm:flex justify-end">
          <g-image src="../../static/code_review.svg" alt="mobile" />
        </div>
      </div>
    </div>

    <!-- Project Container -->
    <div class="overflow-x-hidden">
      <div
        class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative"
      >
        <h2 class="font-bold mb-6" id="projects">Here are some projects I've worked on:</h2>

        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <!-- Start Project List -->
        <!-- TODO: Update Project list -->
        <ul class="text-lg sm:text-xl space-y-6">
          <li class="checkmark">
            <div>
              <a href="https://github.com/Luckey-Elijah/Helm">Helm</a>
            </div>
            <div class="text-lg text-gray-600">A mobile app designed to improve your mental health.</div>
          </li>
          <li class="checkmark">
            <div>
              <a
                href="https://github.com/Luckey-Elijah/Database-for-Non-Profit-Organization"
              >Non-Profit Database Design</a>
            </div>
            <div class="text-lg text-gray-600">
              Designed, implemented, and maintained data defining and data
              managing scripts for a ficticious organization required to track
              progress of
              <i>residents</i>,
              <i>contacts</i>,
              <i>classes</i>
              , and several points of critical data.
            </div>
          </li>
          <li class="checkmark">
            <div>
              <a href="https://paperwalk.io">paperwalk.io</a>
            </div>
            <div
              class="text-lg text-gray-600"
            >Picture perfect excellence. A startup based in Lakeland, Florida for the small- and medium- sized businesses that need to get their foot in the digital door.</div>
          </li>
          <!-- Add a new project here -->
          <!-- <li class="checkmark">
            <div>Project Four</div>
            <div
              class="text-lg text-gray-600"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
          </li>-->
        </ul>
      </div>
      <!-- end projects -->
    </div>

    <!-- GET TO KNOW ME SECTION -->
    <div class="overflow-x-hidden border-gray-200 border-b">
      <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
        <h2 class="font-bold mb-6" id="about">Get to know me:</h2>

        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div>
            <g-image
              src="../../static/headshot.jpg"
              alt="avatar"
              class="w-32 h-32 rounded-full mb-8 lg:mb-0"
            />
          </div>
          <div class="flex-1 text-lg sm:text-xl ml-6">
            Hello, friend! My name is Elijah. I love indie music, creating software,
            and making friends. Reach out to me if you want to meet me in person
            for a cup of coffee or get started on project you have in mind. I look
            forward to knowing you!
          </div>
        </div>
      </div>
      <!-- end get-to-know me -->
    </div>

    <!-- CONTACT Section -->
    <iframe
      class="airtable-embed airtable-dynamic-height"
      src="https://airtable.com/embed/shryTUjLVIU5GVDRh?backgroundColor=orange"
      frameborder="0"
      onmousewheel
      width="100%"
      height="1348"
      style="background: transparent; border: 1px solid #ccc;"
    ></iframe>

    <!-- end contact -->
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>
