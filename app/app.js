var BaronCV;
!function (a) {
	"use strict";
	var b = function () {
		function b(b, c) {
			this.app = angular.module(b, c),
			this.app.run(["$rootScope", function (b) {
						b.Positions = a.Services.Positions
					}
				])
		}
		return b.prototype.addController = function (a, b) {
			this.app.controller(a, b)
		},
		b.prototype.addService = function (a, b) {
			this.app.service(a, b)
		},
		b.prototype.addDirective = function (a, b) {
			this.app.directive(a, b)
		},
		b.prototype.configApp = function (a) {
			this.app.config(a)
		},
		b
	}
	();
	a.MyApp = b
}
(BaronCV || (BaronCV = {}));
var myApp = new BaronCV.MyApp("baronCV", ["ngAnimate", "ngTouch", "ui.bootstrap", "ngRoute", "smoothScroll", "pc035860.scrollWatch", "ui.router", "ngResource", "chart.js"]), BaronCV;
!function (a) {
	var b;
	!function (a) {
		var b = function () {
			function a(a, b) {
				b.otherwise("/home"),
				a.state("home", {
					url : "/home",
					templateUrl : "app/view/app.html"
				})
			}
			return a
		}
		();
		a.Config = b
	}
	(b = a.Config || (a.Config = {}))
}
(BaronCV || (BaronCV = {})), BaronCV.Config.Config.$inject = ["$stateProvider", "$urlRouterProvider"], myApp.configApp(BaronCV.Config.Config);
var BaronCV;
!function (a) {
	"use strict";
	var b = function () {
		function b(b, c) {
			var d = this;
			d.myResourceService = c,
			d.$scope = b,
			d.aboutTextResource = d.myResourceService.getAboutTextResource(),
			d.aboutTextResource.get({}, function (b) {
				d.$scope.aboutText = new a.AboutText(b)
			})
		}
		return b
	}
	();
	a.AboutController = b
}
(BaronCV || (BaronCV = {})), BaronCV.AboutController.$inject = ["$scope", "myResourceService"], myApp.addController("aboutController", BaronCV.AboutController);
var BaronCV;
!function (a) {
	var b = function () {
		function a(a, b) {
			var c = this;
			c.$scope = a,
			c.$scope.controller = this,
			c.myResourceService = b,
			c.$scope.myInterval = 3e3;
			c.$scope.slides = [{
					text : "As a full stack developer, I enjoy doing logical and algorithmic stuff. "
				}, {
					text : "I love my life and my work. Most importantly, I am always looking for opportunity to make a difference to the world."
				}, {
					text : "If you reach this line, that means it took you some time to get to know me. Thank you very much. "
				}
			]
		}
		return a
	}
	();
	a.CarouselController = b
}
(BaronCV || (BaronCV = {})), BaronCV.CarouselController.$inject = ["$scope", "myResourceService"], myApp.addController("carouselController", BaronCV.CarouselController);
var BaronCV;
!function (a) {
	var b = function () {
		function b(b, c) {
			var d = this;
			d.$scope = b,
			d.myResourceService = c,
			d.experienceResource = d.myResourceService.getExperienceesource(),
			d.experienceResource.get({}, function (b) {
				d.$scope.myExperiences = new a.MyExperiences(b)
			})
		}
		return b
	}
	();
	a.ExperienceController = b
}
(BaronCV || (BaronCV = {})), BaronCV.ExperienceController.$inject = ["$scope", "myResourceService"], myApp.addController("experienceController", BaronCV.ExperienceController);
var BaronCV;
!function (a) {
	"use strict";
	var b = function () {
		function b(b, c, d) {
			var e = this;
			e.pagePositionService = c,
			e.myResourceService = d,
			e.$scope = b,
			e.$scope.controller = this,
			e.personalInfoResource = e.myResourceService.getPersonalInforResource(),
			e.personalInfoResource.get({}, function (b) {
				e.$scope.personalInfo = new a.PersonalInfo(b)
			})
		}
		return b.prototype.isBackgroudShowed = function () {
			return this.pagePositionService.isBackgroudShowed()
		},
		b
	}
	();
	a.HeaderWrapController = b
}
(BaronCV || (BaronCV = {})), BaronCV.HeaderWrapController.$inject = ["$scope", "pagePositionService", "myResourceService"], myApp.addController("headerWrapController", BaronCV.HeaderWrapController);
var BaronCV;
!function (a) {
	var b = function () {
		function b(b, c) {
			var d = this;
			d.$scope = b,
			d.$scope.controller = this,
			d.myResourceService = c,
			d.skillResource = d.myResourceService.getSkillesource(),
			d.$scope.graphData = new a.GraphData(d.skillResource),
			d.$scope.graphData.getData()
		}
		return b
	}
	();
	a.SkillController = b
}
(BaronCV || (BaronCV = {})), BaronCV.SkillController.$inject = ["$scope", "myResourceService"], myApp.addController("skillController", BaronCV.SkillController);
var BaronCV;
!function (a) {
	"use strict";
	var b = function () {
		function a(a, b, c) {
			var d = this;
			d.$scope = a,
			d.pagePositionService = b,
			d.$scope.controller = this
		}
		return a.prototype.select = function (a) {
			this.pagePositionService.selectPosition(a)
		},
		a.prototype.isCurrent = function (a) {
			return this.pagePositionService.getPosition() === a
		},
		a.prototype.isBackgroudShowed = function () {
			return this.pagePositionService.isBackgroudShowed()
		},
		a
	}
	();
	a.TopbarController = b
}
(BaronCV || (BaronCV = {})), BaronCV.HeaderWrapController.$inject = ["$scope", "pagePositionService", "myResourceService"], myApp.addController("topbarController", BaronCV.TopbarController);
var BaronCV;
!function (a) {
	var b;
	!function (a) {
		var b = function () {
			function a(a, b) {
				var c = this;
				this.restrict = "A",
				this.link = function (a, b, d, e) {
					angular.element(c.$window).bind("scroll", function () {
						var a = c.$window.innerHeight,
						d = c.$window.pageYOffset,
						e = b.offset().top,
						f = b.innerHeight(),
						g = d + a / 2;
						g >= e && e + f > g ? (b.addClass("glowing"), b.removeClass("my-text-muted")) : (b.removeClass("glowing"), b.addClass("my-text-muted"))
					})
				};
				var d = this;
				d.$animate = a,
				d.$window = b
			}
			return a.factory = function () {
				var b = function (b, c) {
					return new a(b, c)
				};
				return b.$inject = ["$animate", "$window"],
				b
			},
			a
		}
		();
		a.GlowingDirective = b
	}
	(b = a.Directives || (a.Directives = {}))
}
(BaronCV || (BaronCV = {})), myApp.addDirective("myGlowing", BaronCV.Directives.GlowingDirective.factory());
var BaronCV;
!function (a) {
	var b;
	!function (b) {
		var c = function () {
			function b(b, c, d, e) {
				var f = this;
				this.restrict = "A",
				this.link = function (b, c, d, e) {
					angular.element(f.$window).bind("scroll", function () {
						var b = angular.element($("#skillswrap")),
						c = angular.element($("#resume")),
						d = angular.element($("#about")),
						e = angular.element($("#headerwrap")),
						g = angular.element($("#contactWrap")),
						h = angular.element($("#headerwrap")),
						i = (h.offset().top, f.$window.innerHeight),
						j = f.$window.pageYOffset,
						k = document.querySelector("#section-topbar"),
						l = angular.element(k).scope(),
						m = document.querySelector("#skillswrap"),
						n = angular.element(m).scope(),
						o = j + i / 3;
						g.offset().top <= o ? f.pagePositionService.selectPosition(a.Services.Positions.Contact) : b.offset().top <= o ? (f.pagePositionService.selectPosition(a.Services.Positions.Work), n.graphData.mapData()) : c.offset().top <= o ? f.pagePositionService.selectPosition(a.Services.Positions.Resume) : d.offset().top <= o ? f.pagePositionService.selectPosition(a.Services.Positions.About) : e.offset().top <= o && f.pagePositionService.selectPosition(a.Services.Positions.Undefined),
						j > 0 ? f.pagePositionService.setIsBackGroundShowed(!0) : f.pagePositionService.setIsBackGroundShowed(!1),
						l.$apply()
					})
				};
				var g = this;
				g.$location = b,
				g.$window = c,
				g.$document = d,
				g.pagePositionService = e
			}
			return b.factory = function () {
				var a = function (a, c, d, e) {
					return new b(a, c, d, e)
				};
				return a.$inject = ["$location", "$window", "$document", "pagePositionService"],
				a
			},
			b
		}
		();
		b.ScrollDirective = c
	}
	(b = a.Directives || (a.Directives = {}))
}
(BaronCV || (BaronCV = {})), myApp.addDirective("myScroll", BaronCV.Directives.ScrollDirective.factory());
var BaronCV;
!function (a) {
	"use strict";
	var b = function () {
		function a(a) {
			this.text = a.aboutText
		}
		return a
	}
	();
	a.AboutText = b
}
(BaronCV || (BaronCV = {}));
var BaronCV;
!function (a) {
	"use strict";
	var b = function () {
		function a() {}

		return a
	}
	();
	a.Experience = b;
	var c = function () {
		function a(a) {
			this.experiences = a.experiences
		}
		return a
	}
	();
	a.MyExperiences = c
}
(BaronCV || (BaronCV = {}));
var BaronCV;
!function (a) {
	"use strict";
	var b = function () {
		function a(a) {
			this.firstName = a.firstName,
			this.lastName = a.lastName,
			this.email = a.email,
			this.jobTitle = a.jobTitle
		}
		return a
	}
	();
	a.PersonalInfo = b
}
(BaronCV || (BaronCV = {}));
var BaronCV;
!function (a) {
	var b = function () {
		function a() {
			this.data = [[]],
			this.initData = [[]],
			this.labels = []
		}
		return a
	}
	();
	a.SkillSet = b;
	var c = function () {
		function a(a) {
			this.graphOptions = {
				pointLabelFontColor : "#fff",
				pointLabelFontSize : 14
			},
			this.colors = ["#1abc9c"],
			this.programmingSkill = new b,
			this.frontEndSkill = new b,
			this.databaseSkill = new b,
			this.otherSkill = new b,
			this.skillResource = a
		}
		return a.prototype.mapData = function () {
			this.programmingSkill.data = this.skillWrap.programmingSkill.data,
			this.frontEndSkill.data = this.skillWrap.frontEndSkill.data,
			this.databaseSkill.data = this.skillWrap.databaseSkill.data,
			this.otherSkill.data = this.skillWrap.otherSkill.data
		},
		a.prototype.getData = function () {
			var a = this;
			this.skillResource.get({}, function (b) {
				a.skillWrap = b,
				a.init()
			})
		},
		a.prototype.init = function () {
			this.programmingSkill.labels = this.skillWrap.programmingSkill.labels,
			this.frontEndSkill.labels = this.skillWrap.frontEndSkill.labels,
			this.databaseSkill.labels = this.skillWrap.databaseSkill.labels,
			this.otherSkill.labels = this.skillWrap.otherSkill.labels,
			this.programmingSkill.data = this.skillWrap.programmingSkill.initData,
			this.frontEndSkill.data = this.skillWrap.frontEndSkill.initData,
			this.databaseSkill.data = this.skillWrap.databaseSkill.initData,
			this.otherSkill.data = this.skillWrap.otherSkill.initData
		},
		a
	}
	();
	a.GraphData = c
}
(BaronCV || (BaronCV = {}));
var BaronCV;
!function (a) {
	var b;
	!function (a) {
		var b = function () {
			function a(a) {
				var b = this;
				b.$resource = a
			}
			return a.prototype.getPersonalInforResource = function () {
				var a = "app/data/personalInfo.json",
				b = this.$resource("", {}, {
						get : {
							method : "GET",
							url : a
						}
					});
				return b
			},
			a.prototype.getAboutTextResource = function () {
				var a = "app/data/about.json",
				b = this.$resource("", {}, {
						get : {
							method : "GET",
							url : a
						}
					});
				return b
			},
			a.prototype.getSkillesource = function () {
				var a = "app/data/skill.json",
				b = this.$resource("", {}, {
						get : {
							method : "GET",
							url : a
						}
					});
				return b
			},
			a.prototype.getExperienceesource = function () {
				var a = "app/data/experience.json",
				b = this.$resource("", {}, {
						get : {
							method : "GET",
							url : a
						}
					});
				return b
			},
			a
		}
		();
		a.MyResourceService = b
	}
	(b = a.Services || (a.Services = {}))
}
(BaronCV || (BaronCV = {})), BaronCV.Services.MyResourceService.$inject = ["$resource"], myApp.addService("myResourceService", BaronCV.Services.MyResourceService);
var BaronCV;
!function (a) {
	var b;
	!function (a) {
		!function (a) {
			a[a.Undefined = 0] = "Undefined",
			a[a.About = 1] = "About",
			a[a.Resume = 2] = "Resume",
			a[a.Work = 3] = "Work",
			a[a.Contact = 4] = "Contact"
		}
		(a.Positions || (a.Positions = {}));
		var b = (a.Positions, function () {
			function a() {}

			return a.prototype.selectPosition = function (a) {
				this.pagePosition = a
			},
			a.prototype.getPosition = function () {
				return this.pagePosition
			},
			a.prototype.setIsBackGroundShowed = function (a) {
				this.isBackGroundShowed = a
			},
			a.prototype.isBackgroudShowed = function () {
				return this.isBackGroundShowed
			},
			a
		}
			());
		a.PagePositionServices = b
	}
	(b = a.Services || (a.Services = {}))
}
(BaronCV || (BaronCV = {})), BaronCV.Services.PagePositionServices.$inject = [], myApp.addService("pagePositionService", BaronCV.Services.PagePositionServices);
