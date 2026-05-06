const STORAGE_KEY = "bunbury-sichuan-recipe-db-v3";

const weekdays = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
const tripMeta = [
  { id: "main", label: "大采购", dayKey: "mainDay", days: [0, 1, 2] },
  { id: "topup", label: "补货", dayKey: "topUpDay", days: [3, 4, 5, 6] },
];

const baseRecipes = [
  recipe("b001", "花椒番茄蒸蛋羹", ["breakfast"], 310, 22, ["早餐", "蒸蛋", "椒麻"], [
    ing("鸡蛋", 2, "枚", "Woolworths"),
    ing("番茄", 1, "个", "Spudshed"),
    ing("小白菜", 0.5, "把", "Spudshed"),
  ], ["鸡蛋加温水打散，番茄切丁铺底。", "水开后蒸 8-10 分钟。", "出锅加花椒粉、葱花和少量酱油。"]),
  recipe("b002", "酸奶莓果水煮蛋碗", ["breakfast"], 350, 28, ["早餐", "快手"], [
    ing("无糖希腊酸奶", 200, "g", "Woolworths"),
    ing("冷冻莓果", 100, "g", "Woolworths"),
    ing("鸡蛋", 1, "枚", "Woolworths"),
  ], ["酸奶和莓果装碗。", "鸡蛋水煮或提前煮好。", "想吃辣时配几片酸辣黄瓜。"]),
  recipe("b003", "麻辣豆腐鸡蛋羹", ["breakfast"], 360, 30, ["早餐", "豆腐", "麻辣"], [
    ing("硬豆腐", 150, "g", "Woolworths"),
    ing("鸡蛋", 2, "枚", "Woolworths"),
    ing("亚洲青菜", 0.5, "把", "Spudshed"),
  ], ["豆腐切小块，鸡蛋加温水打散。", "豆腐和青菜垫底，倒入蛋液蒸 10 分钟。", "用辣椒面、醋、酱油和热水调低油蘸水。"]),
  recipe("b004", "葱香虾仁蒸蛋", ["breakfast"], 330, 32, ["早餐", "虾仁", "高蛋白"], [
    ing("虾仁", 100, "g", "Woolworths"),
    ing("鸡蛋", 2, "枚", "Woolworths"),
    ing("葱", 0.25, "把", "Spudshed"),
  ], ["虾仁擦干，鸡蛋加温水打散。", "水开后蒸 8 分钟，虾仁变粉即可。", "加葱花、胡椒和少量酱油。"]),
  recipe("b005", "鸡丝黄瓜酸辣早餐碗", ["breakfast"], 380, 35, ["早餐", "酸辣", "鸡胸"], [
    ing("鸡胸肉", 120, "g", "Woolworths"),
    ing("黄瓜", 1, "根", "Spudshed"),
    ing("苹果或梨", 1, "个", "Spudshed"),
  ], ["鸡胸提前蒸熟撕丝。", "黄瓜拍碎，加醋、蒜和辣椒面。", "鸡丝拌进去，水果留作加餐。"]),
  recipe("b006", "毛豆豆腐早餐碗", ["breakfast"], 390, 30, ["早餐", "豆腐", "毛豆"], [
    ing("冷冻毛豆", 100, "g", "Woolworths"),
    ing("嫩豆腐", 150, "g", "Woolworths"),
    ing("番茄", 1, "个", "Spudshed"),
  ], ["毛豆蒸 5 分钟。", "豆腐和番茄一起蒸热。", "加醋、酱油、花椒粉和葱花。"]),
  recipe("b007", "番茄牛肉蒸蛋", ["breakfast"], 420, 35, ["早餐", "牛肉", "蒸蛋"], [
    ing("瘦牛肉片", 100, "g", "Woolworths"),
    ing("鸡蛋", 2, "枚", "Woolworths"),
    ing("番茄", 1, "个", "Spudshed"),
  ], ["牛肉片用胡椒和少量酱油抓匀。", "番茄垫底，倒蛋液，牛肉铺表面。", "蒸 10 分钟，出锅加葱花。"]),
  recipe("b008", "Cottage cheese 辣拌黄瓜鸡蛋", ["breakfast"], 360, 32, ["早餐", "快手", "低油"], [
    ing("cottage cheese", 200, "g", "Woolworths"),
    ing("鸡蛋", 1, "枚", "Woolworths"),
    ing("黄瓜", 1, "根", "Spudshed"),
  ], ["黄瓜拍碎，加醋、蒜和辣椒面。", "鸡蛋煮熟切开。", "cottage cheese 放旁边，咸味够了就别再加盐。"]),

  recipe("m001", "麻辣蘸水鸡胸西兰花", ["main"], 520, 48, ["麻辣", "鸡胸", "蒸菜"], [
    ing("鸡胸肉", 170, "g", "Woolworths"),
    ing("西兰花", 1, "颗", "Spudshed"),
  ], ["鸡胸切片，用姜蒜、胡椒、少量酱油腌 10 分钟。", "西兰花垫底，鸡胸铺上蒸 8-10 分钟。", "辣椒面、花椒粉、醋、酱油和热水调蘸水。"]),
  recipe("m002", "泡椒番茄蒸鱼", ["main"], 450, 42, ["泡椒", "鱼", "酸辣"], [
    ing("白鱼柳", 180, "g", "Woolworths"),
    ing("番茄", 1, "个", "Spudshed"),
    ing("亚洲青菜", 0.5, "把", "Spudshed"),
  ], ["鱼柳铺姜丝，番茄切丁铺旁边。", "水开蒸 6-8 分钟。", "泡椒切碎，加醋和蒸鱼汤调酸辣汁。"]),
  recipe("m003", "椒麻虾仁西葫芦", ["main"], 430, 38, ["椒麻", "虾仁", "快手"], [
    ing("虾仁", 160, "g", "Woolworths"),
    ing("西葫芦", 1, "根", "Spudshed"),
    ing("蘑菇", 100, "g", "Spudshed"),
  ], ["西葫芦和蘑菇切片铺底。", "虾仁铺上，水开蒸 5-6 分钟。", "花椒粉、葱花、青柠汁和酱油调椒麻汁。"]),
  recipe("m004", "豆瓣豆腐蘑菇蒸碗", ["main"], 470, 30, ["豆腐", "豆瓣", "素蛋白"], [
    ing("硬豆腐", 220, "g", "Woolworths"),
    ing("蘑菇", 150, "g", "Spudshed"),
    ing("小白菜", 0.5, "把", "Spudshed"),
  ], ["豆腐切块，蘑菇和青菜垫底。", "水开蒸 8 分钟。", "半茶匙豆瓣加蒜、醋和蒸菜汤调开。"]),
  recipe("m005", "水煮风味瘦牛花菜", ["main"], 540, 45, ["牛肉", "水煮风味"], [
    ing("瘦牛肉片", 160, "g", "Woolworths"),
    ing("花菜", 0.5, "颗", "Spudshed"),
    ing("白菜", 0.5, "颗", "Spudshed"),
  ], ["花菜和白菜蒸熟垫底。", "牛肉片蒸到刚熟。", "用花椒、辣椒面、醋、酱油和热水做少油水煮汁。"]),
  recipe("m006", "酸辣魔芋鸡丝", ["main"], 430, 40, ["酸辣", "鸡胸", "低卡"], [
    ing("鸡胸肉", 150, "g", "Woolworths"),
    ing("魔芋丝", 200, "g", "Woolworths"),
    ing("黄瓜", 1, "根", "Spudshed"),
  ], ["鸡胸蒸熟撕丝。", "魔芋丝焯水去味。", "黄瓜、鸡丝和魔芋用醋、蒜、辣椒面拌匀。"]),
  recipe("m007", "剁椒蒸白鱼小白菜", ["main"], 460, 42, ["剁椒", "鱼", "蒸菜"], [
    ing("白鱼柳", 180, "g", "Woolworths"),
    ing("小白菜", 1, "把", "Spudshed"),
    ing("番茄", 1, "个", "Spudshed"),
  ], ["小白菜垫底，鱼柳铺姜丝。", "少量剁椒铺表面，水开蒸 6-8 分钟。", "如果剁椒很咸，不再额外加盐。"]),
  recipe("m008", "泡椒鸡肉蒸肉饼白菜", ["main"], 500, 44, ["泡椒", "肉饼", "备餐"], [
    ing("鸡肉或火鸡瘦肉末", 170, "g", "Woolworths"),
    ing("白菜", 0.5, "颗", "Spudshed"),
    ing("胡萝卜", 1, "根", "Spudshed"),
  ], ["肉末加姜蒜、胡椒和少量酱油搅上劲。", "白菜垫底，肉末压薄，蒸 10-12 分钟。", "泡椒碎和醋出锅后再加。"]),
  recipe("m009", "藤椒三文鱼南瓜", ["main"], 560, 38, ["三文鱼", "藤椒", "周末"], [
    ing("三文鱼小份", 160, "g", "Woolworths"),
    ing("南瓜", 220, "g", "Spudshed"),
    ing("亚洲青菜", 0.5, "把", "Spudshed"),
  ], ["南瓜切块先蒸 8 分钟。", "加入三文鱼和青菜再蒸 6 分钟。", "藤椒粉、青柠汁和葱花调味。"]),
  recipe("m010", "麻辣豆腐毛豆青菜", ["main"], 480, 34, ["豆腐", "毛豆", "麻辣"], [
    ing("硬豆腐", 200, "g", "Woolworths"),
    ing("冷冻毛豆", 120, "g", "Woolworths"),
    ing("亚洲青菜", 1, "把", "Spudshed"),
  ], ["毛豆先蒸 5 分钟。", "豆腐和青菜一起蒸热。", "用麻辣蘸水拌匀，油控制在一茶匙内。"]),
  recipe("m011", "番茄酸汤虾仁豆腐", ["main"], 450, 36, ["酸汤", "虾仁", "豆腐"], [
    ing("虾仁", 130, "g", "Woolworths"),
    ing("嫩豆腐", 180, "g", "Woolworths"),
    ing("番茄", 2, "个", "Spudshed"),
  ], ["番茄蒸软压出汤。", "加入豆腐和虾仁蒸 5 分钟。", "醋、胡椒和少量辣椒面调酸汤味。"]),
  recipe("m012", "蒜香辣椒蒸茄子鸡胸", ["main"], 500, 44, ["茄子", "鸡胸", "蒜香"], [
    ing("鸡胸肉", 160, "g", "Woolworths"),
    ing("茄子", 1, "根", "Spudshed"),
    ing("香菜", 0.25, "把", "Spudshed"),
  ], ["茄子切条垫底，鸡胸切片铺上。", "蒸 10 分钟。", "蒜末、辣椒面、醋和酱油出锅后淋。"]),
  recipe("m013", "椒麻火鸡肉丸青菜", ["main"], 510, 45, ["火鸡", "椒麻", "肉丸"], [
    ing("火鸡瘦肉末", 170, "g", "Woolworths"),
    ing("亚洲青菜", 1, "把", "Spudshed"),
    ing("蘑菇", 100, "g", "Spudshed"),
  ], ["肉末加姜蒜和胡椒做成小丸子。", "青菜蘑菇垫底，蒸 10 分钟。", "椒麻汁最后淋，少盐。"]),
  recipe("m014", "泡椒魔芋蒸鱼片", ["main"], 440, 42, ["泡椒", "魔芋", "鱼"], [
    ing("白鱼柳", 170, "g", "Woolworths"),
    ing("魔芋丝", 180, "g", "Woolworths"),
    ing("小白菜", 0.5, "把", "Spudshed"),
  ], ["魔芋丝焯水后垫底。", "鱼片铺上，水开蒸 6 分钟。", "泡椒和醋调汁，吃前淋。"]),
  recipe("m015", "豆瓣鸡胸花菜", ["main"], 530, 48, ["豆瓣", "鸡胸", "花菜"], [
    ing("鸡胸肉", 170, "g", "Woolworths"),
    ing("花菜", 0.5, "颗", "Spudshed"),
    ing("黄瓜", 1, "根", "Spudshed"),
  ], ["花菜蒸熟，鸡胸片蒸 8-10 分钟。", "半茶匙豆瓣用蒸菜汤调开。", "黄瓜做酸辣冷拌解腻。"]),
  recipe("m016", "酸辣黄瓜虾仁碗", ["main"], 480, 38, ["虾仁", "酸辣", "冷拌"], [
    ing("虾仁", 160, "g", "Woolworths"),
    ing("黄瓜", 1, "根", "Spudshed"),
    ing("西兰花", 0.5, "颗", "Spudshed"),
  ], ["虾仁和西兰花蒸熟。", "黄瓜拍碎。", "醋、蒜、辣椒面和少量酱油拌匀。"]),
  recipe("m017", "麻辣白菜豆腐卷", ["main"], 460, 30, ["豆腐", "白菜", "麻辣"], [
    ing("硬豆腐", 220, "g", "Woolworths"),
    ing("白菜", 0.5, "颗", "Spudshed"),
    ing("蘑菇", 100, "g", "Spudshed"),
  ], ["白菜叶蒸软。", "豆腐和蘑菇压碎卷入白菜。", "蒸 8 分钟，蘸麻辣汁吃。"]),
  recipe("m018", "青椒鸡胸蘑菇蒸碗", ["main"], 500, 46, ["鸡胸", "青椒", "家常"], [
    ing("鸡胸肉", 170, "g", "Woolworths"),
    ing("蘑菇", 150, "g", "Spudshed"),
    ing("青椒或彩椒", 1, "个", "Spudshed"),
  ], ["鸡胸切片腌 10 分钟。", "蘑菇和青椒垫底，蒸 8-10 分钟。", "蒜末、醋和辣椒面收味。"]),
  recipe("m019", "泡椒牛肉白菜", ["main"], 540, 45, ["牛肉", "泡椒", "白菜"], [
    ing("瘦牛肉片", 160, "g", "Woolworths"),
    ing("白菜", 0.5, "颗", "Spudshed"),
    ing("番茄", 1, "个", "Spudshed"),
  ], ["白菜番茄垫底。", "牛肉片铺上蒸到刚熟。", "泡椒碎、醋和葱花出锅后拌。"]),
  recipe("m020", "藤椒白鱼芦笋", ["main"], 470, 42, ["藤椒", "鱼", "芦笋"], [
    ing("白鱼柳", 180, "g", "Woolworths"),
    ing("芦笋或四季豆", 180, "g", "Spudshed"),
    ing("柠檬或青柠", 0.5, "个", "Spudshed"),
  ], ["芦笋垫底，鱼柳铺姜丝。", "水开蒸 6-8 分钟。", "藤椒粉、青柠汁和少量酱油调味。"]),
  recipe("m021", "豆瓣茄子瘦肉末", ["main"], 520, 42, ["豆瓣", "茄子", "肉末"], [
    ing("鸡肉或火鸡瘦肉末", 160, "g", "Woolworths"),
    ing("茄子", 1, "根", "Spudshed"),
    ing("小白菜", 0.5, "把", "Spudshed"),
  ], ["茄子切条垫底，肉末铺薄。", "蒸 10-12 分钟。", "豆瓣少量加蒜醋和蒸菜汤调开。"]),
  recipe("m022", "酸辣毛豆鸡胸南瓜", ["main"], 510, 46, ["鸡胸", "毛豆", "酸辣"], [
    ing("鸡胸肉", 150, "g", "Woolworths"),
    ing("冷冻毛豆", 100, "g", "Woolworths"),
    ing("南瓜", 220, "g", "Spudshed"),
  ], ["南瓜先蒸 8 分钟。", "加入鸡胸和毛豆再蒸 8 分钟。", "醋、辣椒面、蒜末和葱花拌匀。"]),
];

let state = loadState();

const elements = {
  weekStart: document.querySelector("#weekStart"),
  mainDay: document.querySelector("#mainDay"),
  topUpDay: document.querySelector("#topUpDay"),
  servingValue: document.querySelector("#servingValue"),
  servingMinus: document.querySelector("#servingMinus"),
  servingPlus: document.querySelector("#servingPlus"),
  targetMe: document.querySelector("#targetMe"),
  targetPartner: document.querySelector("#targetPartner"),
  weeklyNote: document.querySelector("#weeklyNote"),
  recipeMetric: document.querySelector("#recipeMetric"),
  customMetric: document.querySelector("#customMetric"),
  calorieMetric: document.querySelector("#calorieMetric"),
  calorieSummary: document.querySelector("#calorieSummary"),
  tripSummary: document.querySelector("#tripSummary"),
  checkedMetric: document.querySelector("#checkedMetric"),
  checkedSummary: document.querySelector("#checkedSummary"),
  planGrid: document.querySelector("#planGrid"),
  tripTabs: document.querySelector("#tripTabs"),
  shoppingLists: document.querySelector("#shoppingLists"),
  recipeFilters: document.querySelector("#recipeFilters"),
  recipeSearch: document.querySelector("#recipeSearch"),
  recipeGrid: document.querySelector("#recipeGrid"),
  recipeForm: document.querySelector("#recipeForm"),
  recipeName: document.querySelector("#recipeName"),
  typeBreakfast: document.querySelector("#typeBreakfast"),
  typeMain: document.querySelector("#typeMain"),
  recipeCalories: document.querySelector("#recipeCalories"),
  recipeProtein: document.querySelector("#recipeProtein"),
  recipeTags: document.querySelector("#recipeTags"),
  recipeIngredients: document.querySelector("#recipeIngredients"),
  recipeSteps: document.querySelector("#recipeSteps"),
  aiImport: document.querySelector("#aiImport"),
  importRecipes: document.querySelector("#importRecipes"),
  exportRecipes: document.querySelector("#exportRecipes"),
  copyAiPrompt: document.querySelector("#copyAiPrompt"),
  shareImport: document.querySelector("#shareImport"),
  exportAllData: document.querySelector("#exportAllData"),
  importAllData: document.querySelector("#importAllData"),
  syncStatus: document.querySelector("#syncStatus"),
  syncCode: document.querySelector("#syncCode"),
  createSyncCode: document.querySelector("#createSyncCode"),
  connectSyncCode: document.querySelector("#connectSyncCode"),
  saveCloud: document.querySelector("#saveCloud"),
  loadCloud: document.querySelector("#loadCloud"),
  autoSync: document.querySelector("#autoSync"),
  generatePlan: document.querySelector("#generatePlan"),
  copyPlan: document.querySelector("#copyPlan"),
  printPlan: document.querySelector("#printPlan"),
  toast: document.querySelector("#toast"),
};

let autoSyncTimer = null;
let syncMessage = "";

init();

function recipe(id, name, types, calories, protein, tags, ingredients, steps) {
  return { id, name, types, calories, protein, tags, ingredients, steps, source: "base" };
}

function ing(name, amount, unit, store, pantry = false) {
  return { name, amount, unit, store, pantry };
}

function init() {
  populateWeekdaySelect(elements.mainDay, state.mainDay);
  populateWeekdaySelect(elements.topUpDay, state.topUpDay);
  elements.weekStart.value = state.weekStart;
  elements.targetMe.value = state.targetMe;
  elements.targetPartner.value = state.targetPartner;
  elements.weeklyNote.value = state.note;

  elements.weekStart.addEventListener("change", () => {
    state.weekStart = elements.weekStart.value || getMondayIso(new Date());
    saveAndRender();
  });
  elements.mainDay.addEventListener("change", () => {
    state.mainDay = elements.mainDay.value;
    saveAndRender();
  });
  elements.topUpDay.addEventListener("change", () => {
    state.topUpDay = elements.topUpDay.value;
    saveAndRender();
  });
  elements.servingMinus.addEventListener("click", () => {
    state.servings = Math.max(1, state.servings - 1);
    saveAndRender();
  });
  elements.servingPlus.addEventListener("click", () => {
    state.servings = Math.min(4, state.servings + 1);
    saveAndRender();
  });
  elements.targetMe.addEventListener("input", () => {
    state.targetMe = cleanTarget(elements.targetMe.value, state.targetMe);
    saveAndRender();
  });
  elements.targetPartner.addEventListener("input", () => {
    state.targetPartner = cleanTarget(elements.targetPartner.value, state.targetPartner);
    saveAndRender();
  });
  elements.weeklyNote.addEventListener("input", () => {
    state.note = elements.weeklyNote.value;
    saveState();
    queueCloudSave();
  });
  elements.recipeSearch.addEventListener("input", () => {
    state.recipeSearch = elements.recipeSearch.value;
    saveAndRender();
  });
  elements.generatePlan.addEventListener("click", () => {
    state.plan = generatePlan({ offset: Date.now() % 997 });
    state.checks = {};
    saveAndRender();
    showToast("下周计划已重新生成。");
  });
  elements.copyPlan.addEventListener("click", copyPlan);
  elements.printPlan.addEventListener("click", () => window.print());
  elements.recipeForm.addEventListener("submit", addRecipeFromForm);
  elements.copyAiPrompt.addEventListener("click", copyAiPrompt);
  elements.importRecipes.addEventListener("click", importRecipes);
  elements.exportRecipes.addEventListener("click", exportCustomRecipes);
  elements.exportAllData.addEventListener("click", exportAllData);
  elements.importAllData.addEventListener("click", importAllData);
  elements.createSyncCode.addEventListener("click", createSyncCode);
  elements.connectSyncCode.addEventListener("click", connectSyncCode);
  elements.saveCloud.addEventListener("click", () => runCloudAction(elements.saveCloud, () => saveCloudData()));
  elements.loadCloud.addEventListener("click", () => runCloudAction(elements.loadCloud, () => loadCloudData()));
  elements.autoSync.addEventListener("change", () => {
    state.sync.auto = elements.autoSync.checked;
    saveState();
    renderSyncUi();
    if (state.sync.auto) queueCloudSave();
    showToast(state.sync.auto ? "已开启自动同步。" : "已关闭自动同步。");
  });

  if (!isPlanValid(state.plan)) {
    state.plan = generatePlan();
    saveState();
  }
  render();
}

function loadState() {
  const defaults = {
    weekStart: getMondayIso(new Date()),
    mainDay: "周日",
    topUpDay: "周三",
    servings: 2,
    targetMe: 1800,
    targetPartner: 1500,
    note: "",
    customRecipes: [],
    plan: null,
    activeTrip: "main",
    recipeFilter: "all",
    recipeSearch: "",
    checks: {},
    sync: getDefaultSync(),
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    return {
      ...defaults,
      ...saved,
      checks: saved?.checks || {},
      customRecipes: saved?.customRecipes || [],
      sync: normalizeSync(saved?.sync),
    };
  } catch {
    return defaults;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function saveAndRender(options = {}) {
  saveState();
  render();
  if (!options.skipCloud) queueCloudSave();
}

function render() {
  elements.servingValue.textContent = `${state.servings} 人`;
  elements.mainDay.value = state.mainDay;
  elements.topUpDay.value = state.topUpDay;
  elements.weekStart.value = state.weekStart;
  elements.targetMe.value = state.targetMe;
  elements.targetPartner.value = state.targetPartner;
  elements.recipeSearch.value = state.recipeSearch;

  renderSyncUi();
  renderMetrics();
  renderPlan();
  renderTripTabs();
  renderShopping();
  renderFilters();
  renderRecipeLibrary();
}

function getRecipes() {
  return [...baseRecipes, ...state.customRecipes];
}

function getRecipe(id) {
  return getRecipes().find((item) => item.id === id) || baseRecipes[0];
}

function getRecipesByType(type) {
  return getRecipes().filter((item) => item.types.includes(type));
}

function generatePlan(options = {}) {
  const breakfasts = getRecipesByType("breakfast");
  const mains = getRecipesByType("main");
  const seed = getWeekNumber(parseIsoDate(state.weekStart)) + (options.offset || 0);

  return weekdays.map((day, index) => ({
    day,
    breakfast: breakfasts[(seed + index) % breakfasts.length].id,
    lunch: mains[(seed * 2 + index * 2) % mains.length].id,
    dinner: mains[(seed * 2 + index * 2 + 1) % mains.length].id,
  }));
}

function isPlanValid(plan) {
  if (!Array.isArray(plan) || plan.length !== 7) return false;
  return plan.every((day) => day.breakfast && day.lunch && day.dinner);
}

function renderPlan() {
  const weekStart = parseIsoDate(state.weekStart);
  elements.planGrid.innerHTML = "";

  state.plan.forEach((dayPlan, index) => {
    const breakfast = getRecipe(dayPlan.breakfast);
    const lunch = getRecipe(dayPlan.lunch);
    const dinner = getRecipe(dayPlan.dinner);
    const total = breakfast.calories + lunch.calories + dinner.calories;
    const card = document.createElement("article");
    card.className = "plan-card";
    card.innerHTML = `
      <header>
        <div>
          <h4>${dayPlan.day}</h4>
          <span class="meal-date">${formatDate(addDays(weekStart, index))}</span>
        </div>
        <span class="daily-kcal">${total} kcal/人</span>
      </header>
      ${renderPlanSlot(index, "breakfast", "早餐", breakfast)}
      ${renderPlanSlot(index, "lunch", "午餐", lunch)}
      ${renderPlanSlot(index, "dinner", "晚餐", dinner)}
      <div class="target-row">
        <span>我剩余 ${formatRemaining(state.targetMe - total)}</span>
        <span>老婆剩余 ${formatRemaining(state.targetPartner - total)}</span>
      </div>
    `;
    elements.planGrid.append(card);
  });

  elements.planGrid.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", () => {
      const day = Number(select.dataset.day);
      const slot = select.dataset.slot;
      state.plan[day][slot] = select.value;
      state.checks = {};
      saveAndRender();
    });
  });
}

function renderPlanSlot(dayIndex, slot, label, selectedRecipe) {
  const type = slot === "breakfast" ? "breakfast" : "main";
  const options = getRecipesByType(type)
    .map((recipeItem) => `<option value="${recipeItem.id}" ${recipeItem.id === selectedRecipe.id ? "selected" : ""}>${recipeItem.name}</option>`)
    .join("");
  return `
    <div class="plan-slot">
      <div class="meal-slot-title">
        <strong>${label}</strong>
        <span class="kcal-chip">${selectedRecipe.calories} kcal</span>
      </div>
      <select data-day="${dayIndex}" data-slot="${slot}" aria-label="${weekdays[dayIndex]}${label}">
        ${options}
      </select>
      <p>${selectedRecipe.tags.slice(0, 3).join(" / ")} · 蛋白 ${selectedRecipe.protein || 0} g</p>
    </div>
  `;
}

function renderTripTabs() {
  elements.tripTabs.innerHTML = "";
  tripMeta.forEach((trip) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `trip-tab${state.activeTrip === trip.id ? " is-active" : ""}`;
    button.textContent = `${state[trip.dayKey]} ${trip.label}`;
    button.addEventListener("click", () => {
      state.activeTrip = trip.id;
      saveAndRender();
    });
    elements.tripTabs.append(button);
  });
}

function renderShopping() {
  const trip = tripMeta.find((item) => item.id === state.activeTrip);
  const grouped = buildShoppingItems(trip.days);
  elements.shoppingLists.innerHTML = "";

  ["Spudshed", "Woolworths"].forEach((store) => {
    const items = grouped.filter((item) => item.store === store);
    const article = document.createElement("article");
    article.className = `store-card ${store === "Spudshed" ? "spudshed" : "woolworths"}`;
    article.innerHTML = `
      <header>
        <div>
          <h4>${store}</h4>
          <p>${store === "Spudshed" ? "蔬菜、水果、香草" : "蛋白质、乳制品、冷冻"}</p>
        </div>
        <span class="store-badge">${items.length} 件</span>
      </header>
    `;
    const list = document.createElement("ul");
    list.className = "shopping-list";

    if (items.length === 0) {
      list.innerHTML = `<li class="empty-row">这一批没有 ${store} 商品</li>`;
    }

    items.forEach((item) => {
      const checked = Boolean(state.checks[item.id]);
      const li = document.createElement("li");
      li.className = `shopping-item${checked ? " is-checked" : ""}`;
      li.innerHTML = `
        <input id="${item.id}" type="checkbox" ${checked ? "checked" : ""} />
        <label for="${item.id}">
          <span class="item-name">${item.name}</span>
          <span class="item-note">${item.usedIn}</span>
        </label>
        <span class="item-qty">${formatAmount(item.amount, item.unit)}</span>
      `;
      li.querySelector("input").addEventListener("change", (event) => {
        state.checks[item.id] = event.target.checked;
        saveAndRender();
      });
      list.append(li);
    });
    article.append(list);
    elements.shoppingLists.append(article);
  });
}

function buildShoppingItems(dayIndexes) {
  const map = new Map();
  dayIndexes.forEach((dayIndex) => {
    const dayPlan = state.plan[dayIndex];
    ["breakfast", "lunch", "dinner"].forEach((slot) => {
      const current = getRecipe(dayPlan[slot]);
      current.ingredients.filter((ingredient) => !ingredient.pantry).forEach((ingredient) => {
        const store = normalizeStore(ingredient.store);
        const key = `${store}|${ingredient.name}|${ingredient.unit}`;
        const existing = map.get(key) || {
          id: `shop-${hashKey(key)}`,
          store,
          name: ingredient.name,
          unit: ingredient.unit,
          amount: 0,
          usedBy: new Set(),
        };
        existing.amount += Number(ingredient.amount || 0) * state.servings;
        existing.usedBy.add(current.name);
        map.set(key, existing);
      });
    });
  });

  return [...map.values()]
    .map((item) => ({ ...item, usedIn: [...item.usedBy].slice(0, 3).join("、") }))
    .sort((a, b) => a.store.localeCompare(b.store) || a.name.localeCompare(b.name));
}

function renderFilters() {
  const filters = [
    ["all", "全部"],
    ["breakfast", "早餐"],
    ["main", "中/晚餐"],
    ["custom", "我的菜"],
  ];
  elements.recipeFilters.innerHTML = "";
  filters.forEach(([value, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-tab${state.recipeFilter === value ? " is-active" : ""}`;
    button.textContent = label;
    button.addEventListener("click", () => {
      state.recipeFilter = value;
      saveAndRender();
    });
    elements.recipeFilters.append(button);
  });
}

function renderRecipeLibrary() {
  const query = state.recipeSearch.trim().toLowerCase();
  let recipes = getRecipes();
  if (state.recipeFilter === "breakfast") recipes = recipes.filter((item) => item.types.includes("breakfast"));
  if (state.recipeFilter === "main") recipes = recipes.filter((item) => item.types.includes("main"));
  if (state.recipeFilter === "custom") recipes = recipes.filter((item) => item.source === "custom");
  if (query) {
    recipes = recipes.filter((item) => {
      const haystack = [
        item.name,
        item.tags.join(" "),
        item.ingredients.map((ingredient) => ingredient.name).join(" "),
      ].join(" ").toLowerCase();
      return haystack.includes(query);
    });
  }

  elements.recipeGrid.innerHTML = "";
  recipes.forEach((item) => {
    const card = document.createElement("article");
    card.className = "recipe-card";
    card.innerHTML = `
      <header>
        <div>
          <h4>${item.name}</h4>
          <p>${typeLabel(item.types)} · 蛋白 ${item.protein || 0} g</p>
        </div>
        <span class="daily-kcal">${item.calories} kcal</span>
      </header>
      <div class="tag-row">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <div class="recipe-body">
        <strong>食材</strong>
        <p>${item.ingredients.map((ingredient) => ingredient.name).slice(0, 5).join("、")}</p>
        <strong>做法</strong>
        <ol>${item.steps.slice(0, 3).map((step) => `<li>${step}</li>`).join("")}</ol>
      </div>
      ${item.source === "custom" ? `<button class="delete-recipe" type="button" data-id="${item.id}">删除</button>` : ""}
    `;
    elements.recipeGrid.append(card);
  });

  elements.recipeGrid.querySelectorAll(".delete-recipe").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      state.customRecipes = state.customRecipes.filter((item) => item.id !== id);
      state.plan = replaceDeletedRecipeInPlan(state.plan, id);
      saveAndRender();
      showToast("已删除自定义菜谱。");
    });
  });
}

function renderMetrics() {
  const recipes = getRecipes();
  const shoppingItems = buildShoppingItems([0, 1, 2, 3, 4, 5, 6]);
  const checkedCount = shoppingItems.filter((item) => state.checks[item.id]).length;
  const percent = shoppingItems.length ? Math.round((checkedCount / shoppingItems.length) * 100) : 0;
  const dailyAverage = Math.round(getDailyTotals().reduce((sum, value) => sum + value, 0) / 7);

  elements.recipeMetric.textContent = `${recipes.length} 道`;
  elements.customMetric.textContent = `内置 ${baseRecipes.length} 道，我的 ${state.customRecipes.length} 道`;
  elements.calorieMetric.textContent = `${dailyAverage} kcal`;
  elements.calorieSummary.textContent = `目标差额：我 ${formatRemaining(state.targetMe - dailyAverage)}，老婆 ${formatRemaining(state.targetPartner - dailyAverage)}`;
  elements.tripSummary.textContent = `${state.mainDay}大采购，${state.topUpDay}补货`;
  elements.checkedMetric.textContent = `${percent}%`;
  elements.checkedSummary.textContent =
    checkedCount > 0 ? `已勾选 ${checkedCount}/${shoppingItems.length} 件` : "还没有勾选商品";
}

function getDailyTotals() {
  return state.plan.map((day) => getRecipe(day.breakfast).calories + getRecipe(day.lunch).calories + getRecipe(day.dinner).calories);
}

function addRecipeFromForm(event) {
  event.preventDefault();
  const types = [];
  if (elements.typeBreakfast.checked) types.push("breakfast");
  if (elements.typeMain.checked) types.push("main");
  if (types.length === 0) {
    showToast("至少勾选早餐或中/晚餐。");
    return;
  }

  const newRecipe = normalizeRecipe({
    name: elements.recipeName.value,
    types,
    calories: Number(elements.recipeCalories.value),
    protein: Number(elements.recipeProtein.value || 0),
    tags: splitList(elements.recipeTags.value),
    ingredients: parseIngredientLines(elements.recipeIngredients.value),
    steps: splitLines(elements.recipeSteps.value),
  });

  state.customRecipes.push(newRecipe);
  elements.recipeForm.reset();
  elements.typeMain.checked = true;
  state.recipeFilter = "custom";
  saveAndRender();
  showToast("已加入菜谱库。");
}

function normalizeRecipe(input) {
  const types = normalizeTypes(input.types || input.categories || ["main"]);
  const ingredients = Array.isArray(input.ingredients)
    ? input.ingredients.map((ingredient) => ing(
        String(ingredient.name || "").trim(),
        Number(ingredient.amount || 0),
        String(ingredient.unit || "份").trim(),
        normalizeStore(ingredient.store || "Spudshed"),
        Boolean(ingredient.pantry),
      )).filter((ingredient) => ingredient.name)
    : [];
  const steps = Array.isArray(input.steps) ? input.steps.map(String).filter(Boolean) : splitLines(input.steps || "");
  const tags = Array.isArray(input.tags) ? input.tags.map(String).filter(Boolean) : splitList(input.tags || "");

  if (!String(input.name || "").trim()) throw new Error("菜名不能为空");
  if (!Number.isFinite(Number(input.calories))) throw new Error("热量必须是数字");
  if (ingredients.length === 0) throw new Error("至少需要一个食材");
  if (steps.length === 0) throw new Error("至少需要一个步骤");

  return {
    id: `custom-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: String(input.name).trim(),
    types,
    calories: Number(input.calories),
    protein: Number(input.protein || 0),
    tags: tags.length ? tags : ["自定义"],
    ingredients,
    steps,
    source: "custom",
  };
}

function importRecipes() {
  try {
    const parsed = JSON.parse(elements.aiImport.value);
    const list = Array.isArray(parsed) ? parsed : [parsed];
    const normalized = list.map(normalizeRecipe);
    state.customRecipes.push(...normalized);
    state.recipeFilter = "custom";
    elements.aiImport.value = "";
    saveAndRender();
    showToast(`已导入 ${normalized.length} 道菜。`);
  } catch (error) {
    showToast(`导入失败：${error.message}`);
  }
}

function exportCustomRecipes() {
  const text = JSON.stringify(state.customRecipes.map(({ source, id, ...rest }) => rest), null, 2);
  elements.aiImport.value = text;
  copyText(text, "我的菜谱 JSON 已放到剪贴板，也显示在文本框里。");
}

function exportAllData() {
  const payload = buildSharePayload();
  const text = JSON.stringify(payload, null, 2);
  elements.shareImport.value = text;
  copyText(text, "共享包已复制，也显示在导入框里。");
}

function importAllData() {
  try {
    const parsed = JSON.parse(elements.shareImport.value);
    applySharedData(parsed);
    elements.weeklyNote.value = state.note;
    elements.shareImport.value = "";
    saveAndRender();
    showToast("共享数据已导入。");
  } catch (error) {
    showToast(`导入失败：${error.message}`);
  }
}

function buildSharePayload() {
  return {
    app: "bunbury-sichuan-recipe-db",
    version: 2,
    exportedAt: new Date().toISOString(),
    data: {
      weekStart: state.weekStart,
      mainDay: state.mainDay,
      topUpDay: state.topUpDay,
      servings: state.servings,
      targetMe: state.targetMe,
      targetPartner: state.targetPartner,
      note: state.note,
      customRecipes: state.customRecipes.map(({ source, ...recipeData }) => recipeData),
      plan: state.plan,
      checks: state.checks,
    },
  };
}

function applySharedData(input) {
  const data = input?.data || input || {};
  const customRecipes = Array.isArray(data.customRecipes)
    ? data.customRecipes.map(normalizeSharedRecipe)
    : [];

  state = {
    ...state,
    weekStart: data.weekStart || state.weekStart,
    mainDay: data.mainDay || state.mainDay,
    topUpDay: data.topUpDay || state.topUpDay,
    servings: Number(data.servings || state.servings),
    targetMe: Number(data.targetMe || state.targetMe),
    targetPartner: Number(data.targetPartner || state.targetPartner),
    note: data.note || "",
    customRecipes,
    plan: Array.isArray(data.plan) ? data.plan : null,
    checks: data.checks && typeof data.checks === "object" ? data.checks : {},
    sync: normalizeSync(state.sync),
  };

  if (!isPlanValid(state.plan)) state.plan = generatePlan();
  elements.weeklyNote.value = state.note;
}

function normalizeSharedRecipe(input) {
  const normalized = normalizeRecipe(input);
  if (String(input?.id || "").startsWith("custom-")) normalized.id = String(input.id);
  normalized.source = "custom";
  return normalized;
}

function createSyncCode() {
  state.sync = {
    ...normalizeSync(state.sync),
    syncId: createUuid(),
    syncSecret: createSecret(),
    lastSyncedAt: "",
  };
  saveState();
  renderSyncUi();
  copyText(formatSyncCode(), "同步码已创建并复制。先保存到云端，再发给老婆。");
}

function connectSyncCode() {
  try {
    const parsed = parseSyncCode(elements.syncCode.value);
    state.sync = { ...normalizeSync(state.sync), ...parsed };
    saveState();
    renderSyncUi();
    showToast(hasSyncConfig() ? "已连接同步码，正在从云端加载。" : "同步码已保存，下一步配置 Supabase。");
    if (hasSyncConfig()) runCloudAction(elements.connectSyncCode, () => loadCloudData());
  } catch (error) {
    showToast(error.message);
  }
}

async function saveCloudData(options = {}) {
  try {
    const sync = requireSyncReady();
    setSyncStatus("正在保存到云端...");
    const result = await callSupabaseRpc("save_shared_plan", {
      p_sync_id: sync.syncId,
      p_sync_secret: sync.syncSecret,
      p_data: buildSharePayload(),
    });
    const row = firstRpcRow(result);
    state.sync.lastSyncedAt = row?.updated_at || new Date().toISOString();
    saveState();
    syncMessage = "";
    renderSyncUi();
    if (!options.silent) showToast("已保存到云端。");
  } catch (error) {
    setSyncStatus(`同步失败：${getCloudErrorMessage(error)}`);
    if (!options.silent) showToast(`同步失败：${getCloudErrorMessage(error)}`);
    throw error;
  }
}

async function loadCloudData(options = {}) {
  try {
    const sync = requireSyncReady();
    setSyncStatus("正在从云端加载...");
    const result = await callSupabaseRpc("load_shared_plan", {
      p_sync_id: sync.syncId,
      p_sync_secret: sync.syncSecret,
    });
    const row = firstRpcRow(result);
    if (!row?.data) throw new Error("云端还没有数据，先在主设备点保存到云端。");
    applySharedData(row.data);
    state.sync.lastSyncedAt = row.updated_at || new Date().toISOString();
    saveAndRender({ skipCloud: true });
    syncMessage = "";
    renderSyncUi();
    if (!options.silent) showToast("已从云端加载。");
  } catch (error) {
    setSyncStatus(`同步失败：${getCloudErrorMessage(error)}`);
    if (!options.silent) showToast(`同步失败：${getCloudErrorMessage(error)}`);
    throw error;
  }
}

async function runCloudAction(button, action) {
  button.disabled = true;
  try {
    await action();
  } catch {
    // Individual cloud actions already surface the error in the sync panel and toast.
  } finally {
    button.disabled = false;
  }
}

function queueCloudSave() {
  window.clearTimeout(autoSyncTimer);
  if (!state.sync?.auto || !state.sync.syncId || !state.sync.syncSecret || !hasSyncConfig()) return;
  autoSyncTimer = window.setTimeout(() => {
    saveCloudData({ silent: true }).catch(() => {});
  }, 1200);
}

async function callSupabaseRpc(functionName, body) {
  const config = getSyncConfig();
  const response = await fetch(`${config.supabaseUrl}/rest/v1/rpc/${functionName}`, {
    method: "POST",
    headers: {
      apikey: config.supabaseAnonKey,
      authorization: `Bearer ${config.supabaseAnonKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const text = await response.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = null;
  }
  if (!response.ok) throw new Error(data?.message || data?.hint || text || response.statusText);
  return data;
}

function requireSyncReady() {
  const sync = normalizeSync(state.sync);
  if (!sync.syncId || !sync.syncSecret) throw new Error("先创建或粘贴同步码。");
  if (!hasSyncConfig()) throw new Error("Supabase 还没配置，请先填 sync-config.js。");
  return sync;
}

function renderSyncUi() {
  const code = formatSyncCode();
  if (elements.syncCode !== document.activeElement) elements.syncCode.value = code;
  elements.autoSync.checked = Boolean(state.sync?.auto);
  if (syncMessage) {
    elements.syncStatus.textContent = syncMessage;
    return;
  }
  if (!code) {
    elements.syncStatus.textContent = "未连接：创建同步码后，两台手机/电脑可以共用一份数据。";
    return;
  }
  if (!hasSyncConfig()) {
    elements.syncStatus.textContent = "已保存同步码，等待配置 Supabase。";
    return;
  }
  elements.syncStatus.textContent = state.sync.lastSyncedAt
    ? `已连接：上次同步 ${formatSyncTime(state.sync.lastSyncedAt)}`
    : "已连接：还没有保存到云端。";
}

function setSyncStatus(message) {
  syncMessage = message;
  elements.syncStatus.textContent = message;
}

function getDefaultSync() {
  return { syncId: "", syncSecret: "", auto: false, lastSyncedAt: "" };
}

function normalizeSync(sync) {
  return { ...getDefaultSync(), ...(sync || {}) };
}

function formatSyncCode() {
  const sync = normalizeSync(state.sync);
  return sync.syncId && sync.syncSecret ? `${sync.syncId}.${sync.syncSecret}` : "";
}

function parseSyncCode(value) {
  const parts = String(value || "").trim().split(".");
  if (parts.length !== 2 || !isUuid(parts[0]) || !/^[A-Za-z0-9_-]{24,}$/.test(parts[1])) {
    throw new Error("同步码格式不对，请完整复制粘贴。");
  }
  return { syncId: parts[0], syncSecret: parts[1] };
}

function isUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(value));
}

function createUuid() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  const randomPart = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).slice(1);
  return `${randomPart()}${randomPart()}-${randomPart()}-4${randomPart().slice(1)}-a${randomPart().slice(1)}-${randomPart()}${randomPart()}${randomPart()}`;
}

function createSecret() {
  if (window.crypto?.getRandomValues) {
    const bytes = window.crypto.getRandomValues(new Uint8Array(24));
    return btoa(String.fromCharCode(...bytes)).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
  }
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}`;
}

function hasSyncConfig() {
  const config = window.APP_SYNC_CONFIG || {};
  return Boolean(String(config.supabaseUrl || "").trim() && String(config.supabaseAnonKey || "").trim());
}

function getSyncConfig() {
  const config = window.APP_SYNC_CONFIG || {};
  return {
    supabaseUrl: String(config.supabaseUrl || "").trim().replace(/\/$/, ""),
    supabaseAnonKey: String(config.supabaseAnonKey || "").trim(),
  };
}

function firstRpcRow(result) {
  return Array.isArray(result) ? result[0] : result;
}

function formatSyncTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "刚刚";
  return date.toLocaleString("zh-CN", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getCloudErrorMessage(error) {
  return error?.message || "请检查网络和同步码";
}

function copyAiPrompt() {
  const prompt = `请帮我生成健康川菜菜谱，要求少油、高蛋白、适合减脂。请只输出 JSON 数组，不要解释。每道菜格式如下：
{
  "name": "菜名",
  "types": ["breakfast"] 或 ["main"] 或 ["breakfast","main"],
  "calories": 每人每份估算热量数字,
  "protein": 每人蛋白质克数数字,
  "tags": ["麻辣","蒸菜","高蛋白"],
  "ingredients": [
    {"name":"食材名","amount":160,"unit":"g","store":"Woolworths"},
    {"name":"蔬菜名","amount":1,"unit":"把","store":"Spudshed"}
  ],
  "steps": ["步骤1","步骤2","步骤3"]
}
限制：不要把大米、酱油、醋、盐、胡椒、蒜、姜、葱、辣椒面、花椒、少量油写进采购食材；这些我默认已有。`;
  copyText(prompt, "AI 提示词已复制。");
}

function copyPlan() {
  const lines = [
    "Bunbury 健康川菜下周计划",
    `人数：${state.servings} 人`,
    `热量目标：我 ${state.targetMe} kcal/天，老婆 ${state.targetPartner} kcal/天`,
    `购物：${state.mainDay}大采购，${state.topUpDay}补货`,
    "",
  ];

  state.plan.forEach((day, index) => {
    const breakfast = getRecipe(day.breakfast);
    const lunch = getRecipe(day.lunch);
    const dinner = getRecipe(day.dinner);
    const total = breakfast.calories + lunch.calories + dinner.calories;
    lines.push(`${weekdays[index]}：${total} kcal/人`);
    lines.push(`早餐：${breakfast.name}（${breakfast.calories} kcal）`);
    lines.push(`午餐：${lunch.name}（${lunch.calories} kcal）`);
    lines.push(`晚餐：${dinner.name}（${dinner.calories} kcal）`);
    lines.push("");
  });

  tripMeta.forEach((trip) => {
    lines.push(`${state[trip.dayKey]} ${trip.label}清单`);
    buildShoppingItems(trip.days).forEach((item) => {
      const mark = state.checks[item.id] ? "[x]" : "[ ]";
      lines.push(`${mark} ${item.name} ${formatAmount(item.amount, item.unit)} (${item.store})`);
    });
    lines.push("");
  });

  if (state.note.trim()) lines.push(`备注：${state.note.trim()}`);
  copyText(lines.join("\n"), "计划已复制。");
}

function replaceDeletedRecipeInPlan(plan, deletedId) {
  const breakfasts = getRecipesByType("breakfast").filter((item) => item.id !== deletedId);
  const mains = getRecipesByType("main").filter((item) => item.id !== deletedId);
  return plan.map((day, index) => ({
    ...day,
    breakfast: day.breakfast === deletedId ? breakfasts[index % breakfasts.length].id : day.breakfast,
    lunch: day.lunch === deletedId ? mains[index % mains.length].id : day.lunch,
    dinner: day.dinner === deletedId ? mains[(index + 1) % mains.length].id : day.dinner,
  }));
}

function parseIngredientLines(value) {
  return splitLines(value).map((line) => {
    const [name, amount = "1", unit = "份", store = "Spudshed"] = line.split("|").map((part) => part.trim());
    return ing(name, Number(amount) || 1, unit || "份", normalizeStore(store), /已有|pantry/i.test(store));
  });
}

function splitLines(value) {
  return String(value).split(/\n+/).map((item) => item.trim()).filter(Boolean);
}

function splitList(value) {
  return String(value).split(/[,，、]/).map((item) => item.trim()).filter(Boolean);
}

function normalizeTypes(types) {
  const raw = Array.isArray(types) ? types : [types];
  const mapped = raw.map((type) => String(type).toLowerCase()).flatMap((type) => {
    if (["breakfast", "早餐"].includes(type)) return ["breakfast"];
    if (["main", "lunch", "dinner", "lunchdinner", "中晚餐", "中/晚餐", "午餐", "晚餐"].includes(type)) return ["main"];
    return [];
  });
  return [...new Set(mapped.length ? mapped : ["main"])];
}

function normalizeStore(store) {
  return /wool/i.test(String(store)) ? "Woolworths" : "Spudshed";
}

function typeLabel(types) {
  const labels = [];
  if (types.includes("breakfast")) labels.push("早餐");
  if (types.includes("main")) labels.push("中/晚餐");
  return labels.join(" / ");
}

function cleanTarget(value, fallback) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(4000, Math.max(1000, Math.round(parsed / 50) * 50));
}

function formatAmount(amount, unit) {
  if (unit === "g") {
    const rounded = Math.ceil(amount / 10) * 10;
    return rounded >= 1000 ? `${trimNumber(rounded / 1000)} kg` : `${rounded} g`;
  }
  if (unit === "kg") return `${trimNumber(amount)} kg`;
  if (["颗", "把", "根", "个", "份", "枚", "瓶", "包"].includes(unit)) return `${roundPractical(amount)} ${unit}`;
  return `${trimNumber(amount)} ${unit}`;
}

function roundPractical(value) {
  if (value <= 1) return trimNumber(value);
  return String(Math.ceil(value));
}

function trimNumber(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function formatRemaining(value) {
  if (value >= 0) return `${value} kcal`;
  return `超 ${Math.abs(value)} kcal`;
}

function populateWeekdaySelect(select, selected) {
  select.innerHTML = "";
  weekdays.forEach((day) => {
    const option = document.createElement("option");
    option.value = day;
    option.textContent = day;
    option.selected = day === selected;
    select.append(option);
  });
}

function copyText(text, message) {
  navigator.clipboard?.writeText(text).then(() => showToast(message)).catch(() => {
    const fallback = document.createElement("textarea");
    fallback.value = text;
    document.body.append(fallback);
    fallback.select();
    document.execCommand("copy");
    fallback.remove();
    showToast(message);
  });
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2200);
}

function getMondayIso(date) {
  const local = new Date(date);
  local.setHours(0, 0, 0, 0);
  const day = local.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  local.setDate(local.getDate() + diff);
  return toIsoDate(local);
}

function toIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseIsoDate(iso) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function formatDate(date) {
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

function getWeekNumber(date) {
  const firstDay = new Date(date.getFullYear(), 0, 1);
  const elapsedDays = Math.floor((date - firstDay) / 86400000);
  return Math.floor((elapsedDays + firstDay.getDay()) / 7);
}

function hashKey(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}
