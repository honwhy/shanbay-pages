<template>
  <main class="pt-24">
    <!-- Hero Section -->
    <section class="container mx-auto px-4 py-20 text-center">
      <h1 class="text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-300 text-transparent bg-clip-text pb-4">Master English Vocabulary<br>One Word at a Time</h1>
      <p class="text-xl mb-8 text-gray-600 dark:text-gray-800">扇贝单词助手V3 是一款专为扇贝网用户打造的浏览器插件，旨在帮助您在任何网页上轻松高效地学习英语。</p>
      <div class="flex justify-center space-x-4">
        <ClientOnly>
          <BrowserInstallLink />
        </ClientOnly>
        <a href="https://github.com/honwhy/shanbay-ext" class="border border-gray-300 dark:border-gray-600 px-8 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Learn More</a>
        
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Smart Learning Features</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="group p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="mb-4 text-3xl text-primary-700 drop-shadow dark:text-primary-300">📝</div>
            <h3 class="text-xl font-semibold mb-2 text-black text-shadow-sm shadow-primary-300/60 dark:text-black">一键添加生词</h3>
            <p class="text-primary-600/90 dark:text-gray-200 transition-colors duration-300 group-hover:text-primary-700 dark:group-hover:text-primary-100">通过双击或选中网页上的单词，您可以迅速将它们添加到您的扇贝网生词本中，极大化了单词学习的流程，使您可以专注于理解和记忆。</p>
          </div>
          <div class="group p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="mb-4 text-3xl text-primary-700 drop-shadow dark:text-primary-300">🔍</div>
            <h3 class="text-xl font-semibold mb-2 text-black text-shadow-sm shadow-primary-300/60 dark:text-black">实时翻译</h3>
            <p class="text-primary-600/90 dark:text-gray-200 transition-colors duration-300 group-hover:text-primary-700 dark:group-hover:text-primary-100">借助扇贝网强大的API支持，能够为您提供精确、详尽的中英文双语释义，帮助您更深入地理解单词的含义和用法。</p>
          </div>
          <div class="group p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="mb-4 text-3xl text-primary-700 drop-shadow dark:text-primary-300">🔄</div>
            <h3 class="text-xl font-semibold mb-2 text-black text-shadow-sm shadow-primary-300/60 dark:text-black">无缝衔接</h3>
            <p class="text-primary-600/90 dark:text-gray-200 transition-colors duration-300 group-hover:text-primary-700 dark:group-hover:text-primary-100">与您的扇贝网账号完美融合，能够同步您的学习进度。无论您在哪里，只要登录账号，就能立即访问您的生词本，继续您的学习之旅。</p>
          </div>
          <div class="group p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="mb-4 text-3xl text-primary-700 drop-shadow dark:text-primary-300">⚙️</div>
            <h3 class="text-xl font-semibold mb-2 text-black text-shadow-sm shadow-primary-300/60 dark:text-black">个性化学习体验</h3>
            <p class="text-primary-600/90 dark:text-gray-200 transition-colors duration-300 group-hover:text-primary-700 dark:group-hover:text-primary-100">根据您的学习习惯和偏好调整插件功能，如设置自动发音、选择词典源或定制复习提醒，打造完全适合您的在线学习环境。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-20 bg-white/5 dark:bg-gray-800/30">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <p class="text-gray-700 dark:text-gray-300 mb-4 italic">"This extension has revolutionized how I learn English vocabulary. It's so intuitive and effective!"</p>
            <div class="flex items-center">
              <div class="ml-4">
                <p class="font-semibold text-gray-900 dark:text-gray-100">Sarah Chen</p>
                <p class="text-gray-600 dark:text-gray-400">English Learner</p>
              </div>
            </div>
          </div>
          <div class="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <p class="text-gray-700 dark:text-gray-300 mb-4 italic">"The smart review system helps me remember words much longer than traditional methods."</p>
            <div class="flex items-center">
              <div class="ml-4">
                <p class="font-semibold text-gray-900 dark:text-gray-100">Michael Kim</p>
                <p class="text-gray-600 dark:text-gray-400">Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Download Section -->
    <section id="download" class="py-20 bg-black/10 dark:bg-white/10">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Start Learning Today</h2>
        <p class="text-xl mb-8">Available for all major browsers</p>
        <div class="flex justify-center space-x-4">
          <a :href="chromeUrl" target="_blank" rel="noopener noreferrer" class="text-text dark:text-text-dark hover:text-primary-900 dark:hover:text-primary-100 hover:bg-white/10 dark:hover:bg-gray-800/20 transition-colors p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-12 md:w-12" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255a3 3 0 0 1-1.743-.147a3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243a2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/></svg>
          </a>
          <a :href="edgeUrl" target="_blank" rel="noopener noreferrer" class="text-text dark:text-text-dark hover:text-primary-900 dark:hover:text-primary-100 hover:bg-white/10 dark:hover:bg-gray-800/20 transition-colors p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-12 md:w-12" viewBox="0 0 16 16"><g fill="currentColor"><path d="M9.482 9.341c-.069.062-.17.153-.17.309c0 .162.107.325.3.456c.877.613 2.521.54 2.592.538h.002c.667 0 1.32-.18 1.894-.519A3.84 3.84 0 0 0 16 6.819c.018-1.316-.44-2.218-.666-2.664l-.04-.08C13.963 1.487 11.106 0 8 0A8 8 0 0 0 .473 5.29C1.488 4.048 3.183 3.262 5 3.262c2.83 0 5.01 1.885 5.01 4.797h-.004v.002c0 .338-.168.832-.487 1.244l.006-.006z"/><path d="M.01 7.753a8.14 8.14 0 0 0 .753 3.641a8 8 0 0 0 6.495 4.564a5 5 0 0 1-.785-.377h-.01l-.12-.075a5.5 5.5 0 0 1-1.56-1.463A5.543 5.543 0 0 1 6.81 5.8l.01-.004l.025-.012c.208-.098.62-.292 1.167-.285q.194.001.384.033a4 4 0 0 0-.993-.698l-.01-.005C6.348 4.282 5.199 4.263 5 4.263c-2.44 0-4.824 1.634-4.99 3.49m10.263 7.912q.133-.04.265-.084q-.153.047-.307.086z"/><path d="M10.228 15.667a5 5 0 0 0 .303-.086l.082-.025a8.02 8.02 0 0 0 4.162-3.3a.25.25 0 0 0-.331-.35q-.322.168-.663.294a6.4 6.4 0 0 1-2.243.4c-2.957 0-5.532-2.031-5.532-4.644q.003-.203.046-.399a4.54 4.54 0 0 0-.46 5.898l.003.005c.315.441.707.821 1.158 1.121h.003l.144.09c.877.55 1.721 1.078 3.328.996"/></g></svg>
          </a>
          <a :href="firefoxUrl" target="_blank" rel="noopener noreferrer" class="text-text dark:text-text-dark hover:text-primary-900 dark:hover:text-primary-100 hover:bg-white/10 dark:hover:bg-gray-800/20 transition-colors p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-12 md:w-12" viewBox="0 0 16 16"><path fill="currentColor" d="M13.384 3.408c.535.276 1.22 1.152 1.556 1.963a8 8 0 0 1 .503 3.897l-.009.077l-.026.224A7.758 7.758 0 0 1 .006 8.257v-.04q.025-.545.114-1.082c.01-.074.075-.42.09-.489l.01-.051a6.6 6.6 0 0 1 1.041-2.35q.327-.465.725-.87q.35-.358.758-.65a1.5 1.5 0 0 1 .26-.137c-.018.268-.04 1.553.268 1.943h.003a5.7 5.7 0 0 1 1.868-1.443a3.6 3.6 0 0 0 .021 1.896q.105.07.2.152c.107.09.226.207.454.433l.068.066l.009.009a2 2 0 0 0 .213.18c.383.287.943.563 1.306.741c.201.1.342.168.359.193l.004.008c-.012.193-.695.858-.933.858c-2.206 0-2.564 1.335-2.564 1.335c.087.997.714 1.839 1.517 2.357a4 4 0 0 0 .439.241q.114.05.228.094c.325.115.665.18 1.01.194c3.043.143 4.155-2.804 3.129-4.745v-.001a3 3 0 0 0-.731-.9a3 3 0 0 0-.571-.37l-.003-.002a2.68 2.68 0 0 1 1.87.454a3.92 3.92 0 0 0-3.396-1.983q-.116.001-.23.01l-.042.003V4.31h-.002a4 4 0 0 0-.8.14a7 7 0 0 0-.333-.314a2 2 0 0 0-.2-.152a4 4 0 0 0-.2-.152a4 4 0 0 1-.088-.383a5 5 0 0 1 1.352-.289l.05-.003c.052-.004.125-.01.205-.012C7.996 2.212 8.733.843 10.17.002l-.003.005l.003-.001l.002-.002h.002l.002-.002h.015a.02.02 0 0 1 .012.007a2.4 2.4 0 0 0 .206.48q.09.153.183.297c.49.774 1.023 1.379 1.543 1.968c.771.874 1.512 1.715 2.036 3.02l-.001-.013a8 8 0 0 0-.786-2.353"/></svg>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import BrowserInstallLink from '~/components/BrowserInstallLink.vue'
import { useBrowserExtensions } from '~/composables/useBrowserExtensions'

const { chromeUrl, edgeUrl, firefoxUrl } = useBrowserExtensions()
</script>