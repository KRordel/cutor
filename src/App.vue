<script setup>
	import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
	<div class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 bg-white/95 supports-backdrop-blur:bg-white/60">
		<div class="max-w-8xl mx-auto">
			<div class="border-b border-slate-900/10 lg:px-8 lg:border-0 mx-4 lg:mx-0">
				<div class="relative h-14 flex items-center">
					<a href="#" class="flex-none flex items-center gap-2 select-none text-slate-700 hover:text-sky-500">
						<svg class="h-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path fill="#171717" d="M12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5Zm0-6a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"></path>
							<path fill="#0ea5e9" d="m16.99 3.137-1.634 1.885-1.053 1.216 1.287.966A5.952 5.952 0 0 1 17.997 12v.043l.002.031c.014.324.181 7.584-10.99 8.792l1.635-1.888 1.053-1.216-1.287-.966A5.952 5.952 0 0 1 6.003 12v-.043L6 11.926c-.014-.324-.18-7.57 10.988-8.79ZM18.747 1.5h-.037C3.94 2.187 4.503 12 4.503 12a7.482 7.482 0 0 0 3.007 5.996l-2.832 3.27a.754.754 0 0 0 .574 1.234h.037C20.06 21.813 19.497 12 19.497 12a7.482 7.482 0 0 0-3.007-5.996l2.832-3.27a.753.753 0 0 0-.574-1.234Z"></path>
						</svg>
						<h3 class="text-2xl font-medium tracking-tight">
							Calcutor
						</h3>
					</a>
					<div class="relative hidden lg:flex items-center ml-auto">
						<nav class="text-sm leading-6 font-semibold text-slate-700">
							<ul class="flex space-x-8">
								<li>
									<a class="hover:text-sky-500" href="#">
										Часто задававемые вопросы
									</a>
								</li>
							</ul>
						</nav>
						<div class="flex items-center border-l border-slate-200 ml-6">
							<a href="#" class="ml-6 block text-slate-400 hover:text-slate-500">
								<svg class="h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm.094 4.5a3.375 3.375 0 1 1 0 6.75 3.375 3.375 0 0 1 0-6.75ZM12 20.25a8.23 8.23 0 0 1-6.055-2.653C6.359 15.45 10.08 15 12 15s5.64.45 6.055 2.596A8.228 8.228 0 0 1 12 20.25Z"></path>
								</svg>
							</a>
						</div>
					</div>

					<button type="button" class="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden">
						<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="m19 19-3.5-3.5"></path>
							<circle cx="11" cy="11" r="6"></circle>
						</svg>
					</button>

					<div class="ml-2 -my-1 lg:hidden">
						<button type="button" class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600">
							<span class="sr-only">
								Navigation
							</span>
							<svg width="24" height="24" fill="none" aria-hidden="true">
								<path d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div class="flex items-center p-4 border-b border-slate-900/10 lg:hidden">
				<button type="button" class="text-slate-500 hover:text-slate-600">
					<span class="sr-only">
						Navigation
					</span>
					<svg width="24" height="24">
						<path d="M5 6h14M5 12h14M5 18h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
					</svg>
				</button>
				<ol class="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
					<li class="flex items-center">
						Калькуляторы для здоровья
						<svg width="3" height="6" aria-hidden="true" class="mx-3 overflow-visible text-slate-400">
							<path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
						</svg>
					</li>
					<li class="font-semibold text-slate-900 truncate">
						Калькулятор веса
					</li>
				</ol>
			</div>
		</div>
	</div>
	<div>
		<div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">













			<div class="hidden lg:block fixed z-20 inset-0 top-[3.5rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto">
				<nav id="nav" class="lg:text-sm lg:leading-6 relative">
					<div class="sticky top-0 -ml-0.5 pointer-events-none">
						<div class="h-10 bg-white dark:bg-slate-900"></div>
						<div class="bg-white dark:bg-slate-900 relative pointer-events-auto">
							<button type="button" class="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700">
								<svg width="24" height="24" fill="none" aria-hidden="true" class="mr-3 flex-none">
									<path d="m19 19-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
									<circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
								</svg>
								Быстрый поиск
								
							</button>
						</div>
						<div class="h-8 bg-gradient-to-b from-white dark:from-slate-900"></div>
					</div>
					<ul>
						
						<li class="mt-12 lg:mt-8 first:lg:mt-0">
							<h5 class="mb-8 lg:mb-3 font-semibold text-slate-900">
								Финансовые калькуляторы
							</h5>
							<ul class="space-y-6 lg:space-y-2 border-l border-slate-100">
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Кредитный калькулятор
									</a>
								</li>
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Ипотечный калькулятор
									</a>
								</li>
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Кредитный калькулятор с досрочным погашением
									</a>
								</li>
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Калькулятор рефинансирования
									</a>
								</li>
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Калькулятор микрозаймов
									</a>
								</li>
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Калькулятор инфляции
									</a>
								</li>
							</ul>
						</li>
						<li class="mt-12 lg:mt-8 first:lg:mt-0">
							<h5 class="mb-8 lg:mb-3 font-semibold text-slate-900">
								Калькуляторы для инвестиций
							</h5>
							<ul class="space-y-6 lg:space-y-2 border-l border-slate-100">
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Калькулятор вкладов
									</a>
								</li>
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Калькулятор инвестиций
									</a>
								</li>
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Калькулятор доходности облигаций
									</a>
								</li>
							</ul>
						</li>
						<li class="mt-12 lg:mt-8 first:lg:mt-0">
							<h5 class="mb-8 lg:mb-3 font-semibold text-slate-900">
								Калькуляторы для здоровья
							</h5>
							<ul class="space-y-6 lg:space-y-2 border-l border-slate-100">
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Калькулятор ИМТ
									</a>
								</li>
								<li >
									<a class="block border-l pl-4 -ml-px text-sky-500 border-current font-semibold " href="#">
										Калькулятор веса
									</a>
								</li>
							</ul>
						</li>
						<li class="mt-12 lg:mt-8 first:lg:mt-0">
							<h5 class="mb-8 lg:mb-3 font-semibold text-slate-900">
								Бухгалтерия и налоги
							</h5>
							<ul class="space-y-6 lg:space-y-2 border-l border-slate-100">
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Калькулятор НДС
									</a>
								</li>
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Калькулятор НДФЛ
									</a>
								</li>
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Калькулятор пеней
									</a>
								</li>
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Калькулятор имущественного вычета
									</a>
								</li>
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Калькулятор налога с продажи квартиры
									</a>
								</li>
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Калькулятор процентов по займу
									</a>
								</li>
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Калькулятор неустойки
									</a>
								</li>
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Сумма прописью
									</a>
								</li>
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Калькулятор стажа
									</a>
								</li>
							</ul>
						</li>
						<li class="mt-12 lg:mt-8 first:lg:mt-0">
							<h5 class="mb-8 lg:mb-3 font-semibold text-slate-900">
								Работа со списками
							</h5>
							<ul class="space-y-6 lg:space-y-2 border-l border-slate-100">
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Рандомайзер списка
									</a>
								</li>
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Случайный выбор из списка
									</a>
								</li>
								<li>
									<a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900" href="#">
										Сравнение списков
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>












			<div class="lg:pl-[19.5rem]">
				<div class="min-h-[calc(100vh-3.6rem)] flex flex-col max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">



					<header id="header" class="relative z-20">
						<div>
							<p class="mb-2 text-sm leading-6 font-semibold text-sky-500">
								Калькуляторы для здоровья
							</p>
							<div class="flex items-center">
								<h1 class="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
									Калькулятор веса
								</h1>
							</div>
						</div>
						<p class="mt-2 text-base text-slate-700">
							Калькулятор веса поможет вам определить идеальный вес исходя из вашего реального роста. Благодаря полученным данным вы сможете узнать стоит ли вам сбросить лишние килограммы или же наоборот набрать полезную массу тела. 
						</p>
					</header>



					<div id="content-wrapper" class="flex-1 relative z-20 prose prose-slate mt-8">
						<p>
							In general, Tailwind CSS v3.0 is designed for and tested on the latest stable versions of Chrome, Firefox, Edge, and Safari. It does not support any version of IE, including IE 11.
						</p>
						
						<p>
							To learn more about specifying which browsers you need to support, check out <a href="https://github.com/browserslist/browserslist">Browserslist</a> which is the standard way to define target browsers in front-end tooling.
						</p>
					</div>





					<footer class="text-sm leading-6 mt-12">
						<div class="py-6 border-t border-slate-200 text-slate-500 space-y-6">
							<div class="flex items-center justify-center gap-10">
								<a class="hover:text-slate-900" href="#">
									Поддержка
								</a>
								<a class="hover:text-slate-900" href="#">
									Пользовательское соглашение
								</a>
								<a class="hover:text-slate-900" href="#">
									Политика конфиденциальности
								</a>
							</div>
							<div>
								<p class="text-sm text-center">
									При использовании материалов сайта необходима ссылка на источник.
								</p>
								<p class="text-sm text-center">
									2024 © calcutor.ru
								</p>
							</div>
							
							<!-- <div class="mb-6 sm:mb-0 sm:flex">
								<p>
									2024 © calcutor.ru
								</p>
								<p class="sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200">
									<a class="hover:text-slate-900 " href="#">
										Trademark Policy
									</a>
								</p>
							</div>
							<a class="hover:text-slate-900" href="https://github.com/tailwindlabs/tailwindcss.com/edit/master/src/pages/docs/browser-support.mdx">
								Edit this page on GitHub
							</a> -->
						</div>
					</footer>

















					<div class="fixed z-20 top-[3.5rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 overflow-y-auto hidden xl:block">
						<div class="px-2">
							<a href="#">
								<img src="/tinkoff_platinum_top.gif" alt="">
							</a>
						</div>
						
						<div class="px-2 mt-8">
							<a class="flex items-center gap-2 lg:text-sm lg:leading-6 mb-2 font-semibold text-slate-900 hover:text-sky-500" href="#">
								<svg class="h-6 text-sky-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="m6 15.235 6 3.333 6-3.333v-6.47l-6-3.333-6 3.333v6.47ZM12 2 3 7v10l9 5 9-5V7l-9-5Z" clip-rule="evenodd"></path>
								 </svg>
								Сохраненные расчеты
							</a>
							<ul class="text-slate-700 text-sm leading-6">
								<li class="ml-4">
									<a href="#pattern-recommendations" class="group flex items-start py-1 leading-5 hover:text-slate-900">
										<svg width="3" height="24" viewBox="0 -9 3 24" class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600">
											<path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
										</svg>
										Имя сохраненного расчета
									</a>
								</li>
								<li class="ml-4">
									<a href="#pattern-recommendations" class="group flex items-start py-1 leading-5 hover:text-slate-900">
										<svg width="3" height="24" viewBox="0 -9 3 24" class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600">
											<path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
										</svg>
										Длинное имя классного сохраненного расчета
									</a>
								</li>
							</ul>
						</div>
						<div class="px-2 mt-8">
							<a class="flex items-center gap-2 lg:text-sm lg:leading-6 mb-2 font-semibold text-slate-900 hover:text-amber-500" href="#">
								<svg class="h-6 text-amber-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M18.469 22.5a.75.75 0 0 1-.44-.14L12 17.99l-6.029 4.37a.75.75 0 0 1-1.15-.847l2.35-6.965-6.093-4.178A.75.75 0 0 1 1.5 9h7.518l2.268-6.981a.75.75 0 0 1 1.427 0l2.27 6.984H22.5a.75.75 0 0 1 .424 1.369l-6.096 4.176 2.35 6.963a.75.75 0 0 1-.71.99Z"></path>
								</svg>
								Избранные калькуляторы
							</a>
							<p class="ml-4 text-slate-700 text-sm leading-6">
								У вас пока нет избранных калькуляторов
							</p>
							
						</div>
						<!-- <div class="px-2 mt-8">
							<h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6">
								Калькуляторы для здоровья
							</h5>
							<ul class="text-slate-700 text-sm leading-6">
								<li class="ml-4">
									<a href="#pattern-recommendations" class="group flex items-start py-1 leading-5 hover:text-slate-900">
										<svg width="3" height="24" viewBox="0 -9 3 24" class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600">
											<path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
										</svg>
										Калькулятор ИМТ
									</a>
								</li>
								<li class="ml-4">
									<a href="#class-detection-in-depth" class="group flex items-start py-1 leading-5 text-sky-500">
										<svg width="3" height="24" viewBox="0 -9 3 24" class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600">
											<path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
										</svg>
										Калькулятор веса
									</a>
								</li>
							</ul>
						</div> -->
						
					</div>








				</div>
			</div>











		</div>
	</div>
</template>

