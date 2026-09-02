import type { Block, EncPage, Figure, ViewMode } from "./types";
import { markTafelPages, platesFromPages } from "./plates";
import { PAGE_04 } from "./volume/p04";
import { PAGE_05 } from "./volume/p05";
import { PAGE_06 } from "./volume/p06";
import { PAGE_07 } from "./volume/p07";
import { PAGE_08 } from "./volume/p08";
import { PAGE_08_TAFEL } from "./volume/p08tafel";
import { PAGE_09 } from "./volume/p09";
import { PAGE_10 } from "./volume/p10";
import { PAGE_11 } from "./volume/p11";
import { PAGE_12 } from "./volume/p12";
import { PAGE_13 } from "./volume/p13";
import { PAGE_14 } from "./volume/p14";
import { PAGE_15 } from "./volume/p15";
import { PAGE_16 } from "./volume/p16";
import { PAGE_17 } from "./volume/p17";
import { PAGE_18 } from "./volume/p18";
import { PAGE_19 } from "./volume/p19";
import { PAGE_20 } from "./volume/p20";
import { PAGE_21 } from "./volume/p21";
import { PAGE_22 } from "./volume/p22";
import { PAGE_23 } from "./volume/p23";
import { PAGE_24 } from "./volume/p24";
import { PAGE_25 } from "./volume/p25";
import { PAGE_26 } from "./volume/p26";
import { PAGE_27 } from "./volume/p27";
import { PAGE_28 } from "./volume/p28";
import { PAGE_29 } from "./volume/p29";
import { PAGE_30 } from "./volume/p30";
import { PAGE_31 } from "./volume/p31";
import { PAGE_32 } from "./volume/p32";
import { PAGE_33 } from "./volume/p33";
import { PAGE_34 } from "./volume/p34";
import { PAGE_35 } from "./volume/p35";
import { PAGE_36 } from "./volume/p36";
import { PAGE_37 } from "./volume/p37";
import { PAGE_38 } from "./volume/p38";
import { PAGE_39 } from "./volume/p39";
import { PAGE_40 } from "./volume/p40";
import { PAGE_41 } from "./volume/p41";
import { PAGE_42 } from "./volume/p42";
import { PAGE_43 } from "./volume/p43";
import { PAGE_44 } from "./volume/p44";
import { PAGE_45 } from "./volume/p45";
import { PAGE_46 } from "./volume/p46";
import { PAGE_47 } from "./volume/p47";
import { PAGE_48 } from "./volume/p48";
import { PAGE_49 } from "./volume/p49";
import { PAGE_50 } from "./volume/p50";
import { PAGE_51 } from "./volume/p51";
import { PAGE_52 } from "./volume/p52";
import { PAGE_53 } from "./volume/p53";
import { PAGE_54 } from "./volume/p54";
import { PAGE_55 } from "./volume/p55";
import { PAGE_56 } from "./volume/p56";
import { PAGE_57 } from "./volume/p57";
import { PAGE_58 } from "./volume/p58";
import { PAGE_59 } from "./volume/p59";
import { PAGE_60 } from "./volume/p60";
import { PAGE_61 } from "./volume/p61";
import { PAGE_62 } from "./volume/p62";
import { PAGE_63 } from "./volume/p63";
import { PAGE_64 } from "./volume/p64";
import { PAGE_65 } from "./volume/p65";
import { PAGE_66 } from "./volume/p66";
import { PAGE_67 } from "./volume/p67";
import { PAGE_68 } from "./volume/p68";
import { PAGE_69 } from "./volume/p69";
import { PAGE_70 } from "./volume/p70";
import { PAGE_71 } from "./volume/p71";
import { PAGE_72 } from "./volume/p72";
import { PAGE_73 } from "./volume/p73";
import { PAGE_74 } from "./volume/p74";
import { PAGE_75 } from "./volume/p75";
import { PAGE_76 } from "./volume/p76";
import { PAGE_77 } from "./volume/p77";
import { PAGE_78 } from "./volume/p78";
import { PAGE_79 } from "./volume/p79";
import { PAGE_80 } from "./volume/p80";
import { PAGE_81 } from "./volume/p81";
import { PAGE_82 } from "./volume/p82";
import { PAGE_83 } from "./volume/p83";
import { PAGE_84 } from "./volume/p84";
import { PAGE_85 } from "./volume/p85";
import { PAGE_86 } from "./volume/p86";
import { PAGE_87 } from "./volume/p87";
import { PAGE_88 } from "./volume/p88";
import { PAGE_89 } from "./volume/p89";
import { PAGE_90 } from "./volume/p90";
import { PAGE_91 } from "./volume/p91";
import { PAGE_92 } from "./volume/p92";
import { PAGE_93 } from "./volume/p93";
import { PAGE_94 } from "./volume/p94";
import { PAGE_95 } from "./volume/p95";
import { PAGE_96 } from "./volume/p96";
import { PAGE_97 } from "./volume/p97";
import { PAGE_98 } from "./volume/p98";
import { PAGE_99 } from "./volume/p99";
import { PAGE_100 } from "./volume/p100";
import { PAGE_101 } from "./volume/p101";
import { PAGE_102 } from "./volume/p102";
import { PAGE_103 } from "./volume/p103";
import { PAGE_104 } from "./volume/p104";
import { PAGE_105 } from "./volume/p105";
import { PAGE_106 } from "./volume/p106";
import { PAGE_107 } from "./volume/p107";
import { PAGE_108 } from "./volume/p108";
import { PAGE_109 } from "./volume/p109";
import { PAGE_110 } from "./volume/p110";
import { PAGE_111 } from "./volume/p111";
import { PAGE_112 } from "./volume/p112";
import { PAGE_113 } from "./volume/p113";
import { PAGE_114 } from "./volume/p114";
import { PAGE_115 } from "./volume/p115";
import { PAGE_116 } from "./volume/p116";
import { PAGE_117 } from "./volume/p117";
import { PAGE_118 } from "./volume/p118";
import { PAGE_119 } from "./volume/p119";
import { PAGE_120 } from "./volume/p120";
import { PAGE_121 } from "./volume/p121";
import { PAGE_122 } from "./volume/p122";
import { PAGE_123 } from "./volume/p123";
import { PAGE_124 } from "./volume/p124";
import { PAGE_125 } from "./volume/p125";
import { PAGE_126 } from "./volume/p126";
import { PAGE_127 } from "./volume/p127";
import { PAGE_128 } from "./volume/p128";
import { PAGE_129 } from "./volume/p129";
import { PAGE_130 } from "./volume/p130";
import { PAGE_131 } from "./volume/p131";
import { PAGE_132 } from "./volume/p132";
import { PAGE_133 } from "./volume/p133";
import { PAGE_134 } from "./volume/p134";
import { PAGE_135 } from "./volume/p135";
import { PAGE_136 } from "./volume/p136";
import { PAGE_137 } from "./volume/p137";
import { PAGE_138 } from "./volume/p138";
import { PAGE_139 } from "./volume/p139";
import { PAGE_140 } from "./volume/p140";
import { PAGE_141 } from "./volume/p141";
import { PAGE_142 } from "./volume/p142";
import { PAGE_143 } from "./volume/p143";
import { PAGE_144 } from "./volume/p144";
import { PAGE_145 } from "./volume/p145";
import { PAGE_146 } from "./volume/p146";
import { PAGE_147 } from "./volume/p147";
import { PAGE_148 } from "./volume/p148";
import { PAGE_149 } from "./volume/p149";
import { PAGE_150 } from "./volume/p150";
import { PAGE_151 } from "./volume/p151";
import { PAGE_152 } from "./volume/p152";
import { PAGE_153 } from "./volume/p153";
import { PAGE_154 } from "./volume/p154";
import { PAGE_155 } from "./volume/p155";
import { PAGE_156 } from "./volume/p156";
import { PAGE_157 } from "./volume/p157";
import { PAGE_158 } from "./volume/p158";
import { PAGE_159 } from "./volume/p159";
import { PAGE_160 } from "./volume/p160";
import { PAGE_161 } from "./volume/p161";
import { PAGE_162 } from "./volume/p162";
import { PAGE_163 } from "./volume/p163";
import { PAGE_164 } from "./volume/p164";
import { PAGE_165 } from "./volume/p165";
import { PAGE_166 } from "./volume/p166";
import { PAGE_167 } from "./volume/p167";
import { PAGE_168 } from "./volume/p168";
import { PAGE_169 } from "./volume/p169";
import { PAGE_170 } from "./volume/p170";
import { PAGE_171 } from "./volume/p171";
import { PAGE_172 } from "./volume/p172";
import { PAGE_173 } from "./volume/p173";
import { PAGE_174 } from "./volume/p174";
import { PAGE_175 } from "./volume/p175";
import { PAGE_176 } from "./volume/p176";
import { PAGE_177 } from "./volume/p177";
import { PAGE_178 } from "./volume/p178";
import { PAGE_179 } from "./volume/p179";
import { PAGE_180 } from "./volume/p180";
import { PAGE_181 } from "./volume/p181";
import { PAGE_182 } from "./volume/p182";
import { PAGE_183 } from "./volume/p183";
import { PAGE_184 } from "./volume/p184";
import { PAGE_185 } from "./volume/p185";
import { PAGE_186 } from "./volume/p186";
import { PAGE_187 } from "./volume/p187";
import { PAGE_188 } from "./volume/p188";
import { PAGE_189 } from "./volume/p189";
import { PAGE_190 } from "./volume/p190";
import { PAGE_191 } from "./volume/p191";
import { PAGE_192 } from "./volume/p192";
import { PAGE_193 } from "./volume/p193";
import { PAGE_194 } from "./volume/p194";
import { PAGE_195 } from "./volume/p195";
import { PAGE_196 } from "./volume/p196";
import { PAGE_197 } from "./volume/p197";
import { PAGE_198 } from "./volume/p198";
import { PAGE_199 } from "./volume/p199";
import { PAGE_200 } from "./volume/p200";
import { PAGE_201 } from "./volume/p201";
import { PAGE_202 } from "./volume/p202";
import { PAGE_203 } from "./volume/p203";
import { PAGE_204 } from "./volume/p204";
import { PAGE_205 } from "./volume/p205";
import { PAGE_206 } from "./volume/p206";
import { PAGE_207 } from "./volume/p207";
import { PAGE_208 } from "./volume/p208";
import { PAGE_209 } from "./volume/p209";
import { PAGE_210 } from "./volume/p210";
import { PAGE_211 } from "./volume/p211";
import { PAGE_212 } from "./volume/p212";
import { PAGE_213 } from "./volume/p213";
import { PAGE_214 } from "./volume/p214";
import { PAGE_215 } from "./volume/p215";
import { PAGE_216 } from "./volume/p216";
import { PAGE_217 } from "./volume/p217";
import { PAGE_218 } from "./volume/p218";
import { PAGE_219 } from "./volume/p219";
import { PAGE_220 } from "./volume/p220";
import { PAGE_221 } from "./volume/p221";
import { PAGE_222 } from "./volume/p222";
import { PAGE_223 } from "./volume/p223";
import { PAGE_224 } from "./volume/p224";
import { PAGE_225 } from "./volume/p225";
import { PAGE_226 } from "./volume/p226";
import { PAGE_227 } from "./volume/p227";
import { PAGE_228 } from "./volume/p228";
import { PAGE_229 } from "./volume/p229";
import { PAGE_230 } from "./volume/p230";
import { PAGE_231 } from "./volume/p231";
import { PAGE_232 } from "./volume/p232";
import { PAGE_233 } from "./volume/p233";
import { PAGE_234 } from "./volume/p234";
import { PAGE_235 } from "./volume/p235";
import { PAGE_236 } from "./volume/p236";
import { PAGE_237 } from "./volume/p237";
import { PAGE_238 } from "./volume/p238";
import { PAGE_239 } from "./volume/p239";
import { PAGE_240 } from "./volume/p240";
import { PAGE_241 } from "./volume/p241";
import { PAGE_242 } from "./volume/p242";
import { PAGE_243 } from "./volume/p243";
import { PAGE_244 } from "./volume/p244";
import { PAGE_245 } from "./volume/p245";
import { PAGE_246 } from "./volume/p246";
import { PAGE_247 } from "./volume/p247";
import { PAGE_248 } from "./volume/p248";
import { PAGE_249 } from "./volume/p249";
import { PAGE_250 } from "./volume/p250";
import { PAGE_251 } from "./volume/p251";
import { PAGE_252 } from "./volume/p252";
import { PAGE_253 } from "./volume/p253";
import { PAGE_254 } from "./volume/p254";
import { PAGE_255 } from "./volume/p255";
import { PAGE_256 } from "./volume/p256";
import { PAGE_257 } from "./volume/p257";
import { PAGE_258 } from "./volume/p258";
import { PAGE_259 } from "./volume/p259";
import { PAGE_260 } from "./volume/p260";
import { PAGE_261 } from "./volume/p261";
import { PAGE_262 } from "./volume/p262";
import { PAGE_263 } from "./volume/p263";
import { PAGE_264 } from "./volume/p264";
import { PAGE_265 } from "./volume/p265";
import { PAGE_266 } from "./volume/p266";
import { PAGE_267 } from "./volume/p267";
import { PAGE_268 } from "./volume/p268";
import { PAGE_269 } from "./volume/p269";
import { PAGE_270 } from "./volume/p270";
import { PAGE_271 } from "./volume/p271";
import { PAGE_272 } from "./volume/p272";
import { PAGE_273 } from "./volume/p273";
import { PAGE_274 } from "./volume/p274";
import { PAGE_275 } from "./volume/p275";
import { PAGE_276 } from "./volume/p276";
import { PAGE_277 } from "./volume/p277";
import { PAGE_278 } from "./volume/p278";
import { PAGE_279 } from "./volume/p279";
import { PAGE_280 } from "./volume/p280";
import { PAGE_281 } from "./volume/p281";
import { PAGE_282 } from "./volume/p282";
import { PAGE_283 } from "./volume/p283";
import { PAGE_284 } from "./volume/p284";
import { PAGE_285 } from "./volume/p285";
import { PAGE_286 } from "./volume/p286";
import { PAGE_287 } from "./volume/p287";
import { PAGE_288 } from "./volume/p288";
import { PAGE_289 } from "./volume/p289";
import { PAGE_290 } from "./volume/p290";
import { PAGE_291 } from "./volume/p291";
import { PAGE_292 } from "./volume/p292";
import { PAGE_293 } from "./volume/p293";
import { PAGE_294 } from "./volume/p294";
import { PAGE_295 } from "./volume/p295";
import { PAGE_296 } from "./volume/p296";
import { PAGE_297 } from "./volume/p297";
import { PAGE_298 } from "./volume/p298";
import { PAGE_299 } from "./volume/p299";
import { PAGE_300 } from "./volume/p300";
import { PAGE_301 } from "./volume/p301";
import { PAGE_302 } from "./volume/p302";
import { PAGE_303 } from "./volume/p303";
import { PAGE_304 } from "./volume/p304";
import { PAGE_305 } from "./volume/p305";
import { PAGE_306 } from "./volume/p306";
import { PAGE_307 } from "./volume/p307";
import { PAGE_308 } from "./volume/p308";
import { PAGE_309 } from "./volume/p309";
import { PAGE_310 } from "./volume/p310";
import { PAGE_311 } from "./volume/p311";
import { PAGE_312 } from "./volume/p312";
import { PAGE_313 } from "./volume/p313";
import { PAGE_314 } from "./volume/p314";
import { PAGE_315 } from "./volume/p315";
import { PAGE_316 } from "./volume/p316";
import { PAGE_317 } from "./volume/p317";
import { PAGE_318 } from "./volume/p318";
import { PAGE_319 } from "./volume/p319";
import { PAGE_320 } from "./volume/p320";
import { PAGE_321 } from "./volume/p321";
import { PAGE_322 } from "./volume/p322";
import { PAGE_323 } from "./volume/p323";
import { PAGE_324 } from "./volume/p324";
import { PAGE_325 } from "./volume/p325";
import { PAGE_326 } from "./volume/p326";
import { PAGE_327 } from "./volume/p327";
import { PAGE_328 } from "./volume/p328";
import { PAGE_329 } from "./volume/p329";
import { PAGE_330 } from "./volume/p330";
import { PAGE_331 } from "./volume/p331";
import { PAGE_332 } from "./volume/p332";
import { PAGE_333 } from "./volume/p333";
import { PAGE_334 } from "./volume/p334";
import { PAGE_335 } from "./volume/p335";
import { PAGE_336 } from "./volume/p336";
import { PAGE_337 } from "./volume/p337";
import { PAGE_338 } from "./volume/p338";
import { PAGE_339 } from "./volume/p339";
import { PAGE_340 } from "./volume/p340";
import { PAGE_341 } from "./volume/p341";
import { PAGE_342 } from "./volume/p342";
import { PAGE_343 } from "./volume/p343";
import { PAGE_344 } from "./volume/p344";
import { PAGE_345 } from "./volume/p345";
import { PAGE_346 } from "./volume/p346";
import { PAGE_347 } from "./volume/p347";
import { PAGE_348 } from "./volume/p348";
import { PAGE_349 } from "./volume/p349";
import { PAGE_350 } from "./volume/p350";
import { PAGE_351 } from "./volume/p351";
import { PAGE_352 } from "./volume/p352";
import { PAGE_353 } from "./volume/p353";
import { PAGE_354 } from "./volume/p354";
import { PAGE_355 } from "./volume/p355";
import { PAGE_356 } from "./volume/p356";
import { PAGE_357 } from "./volume/p357";
import { PAGE_358 } from "./volume/p358";
import { PAGE_359 } from "./volume/p359";
import { PAGE_360 } from "./volume/p360";
import { PAGE_361 } from "./volume/p361";
import { PAGE_362 } from "./volume/p362";
import { PAGE_363 } from "./volume/p363";
import { PAGE_364 } from "./volume/p364";
import { PAGE_365 } from "./volume/p365";
import { PAGE_366 } from "./volume/p366";
import { PAGE_367 } from "./volume/p367";
import { PAGE_368 } from "./volume/p368";
import { PAGE_369 } from "./volume/p369";
import { PAGE_370 } from "./volume/p370";
import { PAGE_371 } from "./volume/p371";
import { PAGE_372 } from "./volume/p372";
import { PAGE_373 } from "./volume/p373";
import { PAGE_374 } from "./volume/p374";
import { PAGE_375 } from "./volume/p375";
import { PAGE_376 } from "./volume/p376";
import { PAGE_377 } from "./volume/p377";
import { PAGE_378 } from "./volume/p378";
import { PAGE_379 } from "./volume/p379";
import { PAGE_380 } from "./volume/p380";
import { PAGE_381 } from "./volume/p381";
import { PAGE_382 } from "./volume/p382";
import { PAGE_383 } from "./volume/p383";
import { PAGE_384 } from "./volume/p384";
import { PAGE_385 } from "./volume/p385";
import { PAGE_386 } from "./volume/p386";
import { PAGE_387 } from "./volume/p387";
import { PAGE_388 } from "./volume/p388";
import { PAGE_389 } from "./volume/p389";
import { PAGE_390 } from "./volume/p390";
import { PAGE_391 } from "./volume/p391";
import { PAGE_392 } from "./volume/p392";
import { PAGE_393 } from "./volume/p393";
import { PAGE_394 } from "./volume/p394";
import { PAGE_395 } from "./volume/p395";
import { PAGE_396 } from "./volume/p396";
import { PAGE_397 } from "./volume/p397";
import { PAGE_398 } from "./volume/p398";
import { PAGE_399 } from "./volume/p399";
import { PAGE_400 } from "./volume/p400";
import { PAGE_401 } from "./volume/p401";
import { PAGE_402 } from "./volume/p402";
import { PAGE_403 } from "./volume/p403";
import { PAGE_404 } from "./volume/p404";
import { PAGE_405 } from "./volume/p405";
import { PAGE_406 } from "./volume/p406";
import { PAGE_407 } from "./volume/p407";
import { PAGE_408 } from "./volume/p408";
import { PAGE_409 } from "./volume/p409";
import { PAGE_410 } from "./volume/p410";
import { PAGE_411 } from "./volume/p411";
import { PAGE_412 } from "./volume/p412";
import { PAGE_413 } from "./volume/p413";
import { PAGE_414 } from "./volume/p414";
import { PAGE_415 } from "./volume/p415";
import { PAGE_416 } from "./volume/p416";
import { PAGE_417 } from "./volume/p417";
import { PAGE_418 } from "./volume/p418";
import { PAGE_419 } from "./volume/p419";
import { PAGE_420 } from "./volume/p420";
import { PAGE_421 } from "./volume/p421";
import { PAGE_422 } from "./volume/p422";
import { PAGE_423 } from "./volume/p423";
import { PAGE_424 } from "./volume/p424";
import { PAGE_425 } from "./volume/p425";
import { PAGE_426 } from "./volume/p426";
import { PAGE_427 } from "./volume/p427";
import { PAGE_428 } from "./volume/p428";
import { PAGE_429 } from "./volume/p429";
import { PAGE_430 } from "./volume/p430";
import { PAGE_431 } from "./volume/p431";
import { PAGE_432 } from "./volume/p432";
import { PAGE_433 } from "./volume/p433";
import { PAGE_434 } from "./volume/p434";
import { PAGE_435 } from "./volume/p435";
import { PAGE_436 } from "./volume/p436";
import { PAGE_437 } from "./volume/p437";
import { PAGE_438 } from "./volume/p438";
import { PAGE_439 } from "./volume/p439";
import { PAGE_440 } from "./volume/p440";
import { PAGE_441 } from "./volume/p441";
import { PAGE_442 } from "./volume/p442";
import { PAGE_443 } from "./volume/p443";
import { PAGE_444 } from "./volume/p444";
import { PAGE_445 } from "./volume/p445";
import { PAGE_446 } from "./volume/p446";
import { PAGE_447 } from "./volume/p447";
import { PAGE_448 } from "./volume/p448";
import { PAGE_449 } from "./volume/p449";
import { PAGE_450 } from "./volume/p450";
import { PAGE_451 } from "./volume/p451";
import { PAGE_452 } from "./volume/p452";
import { PAGE_453 } from "./volume/p453";
import { PAGE_454 } from "./volume/p454";
import { PAGE_455 } from "./volume/p455";
import { PAGE_456 } from "./volume/p456";
import { PAGE_457 } from "./volume/p457";
import { PAGE_458 } from "./volume/p458";
import { PAGE_459 } from "./volume/p459";
import { PAGE_460 } from "./volume/p460";
import { PAGE_461 } from "./volume/p461";
import { PAGE_462 } from "./volume/p462";
import { PAGE_463 } from "./volume/p463";
import { PAGE_464 } from "./volume/p464";
import { PAGE_465 } from "./volume/p465";
import { PAGE_466 } from "./volume/p466";
import { PAGE_467 } from "./volume/p467";
import { PAGE_468 } from "./volume/p468";
import { PAGE_469 } from "./volume/p469";
import { PAGE_470 } from "./volume/p470";
import { PAGE_471 } from "./volume/p471";
import { PAGE_472 } from "./volume/p472";
import { PAGE_473 } from "./volume/p473";
import { PAGE_474 } from "./volume/p474";
import { PAGE_475 } from "./volume/p475";
import { PAGE_476 } from "./volume/p476";
import { PAGE_477 } from "./volume/p477";
import { PAGE_478 } from "./volume/p478";
import { PAGE_479 } from "./volume/p479";
import { PAGE_480 } from "./volume/p480";
import { PAGE_481 } from "./volume/p481";
import { PAGE_482 } from "./volume/p482";
import { PAGE_483 } from "./volume/p483";
import { PAGE_484 } from "./volume/p484";
import { PAGE_485 } from "./volume/p485";
import { PAGE_486 } from "./volume/p486";
import { PAGE_487 } from "./volume/p487";
import { PAGE_488 } from "./volume/p488";
import { PAGE_489 } from "./volume/p489";
import { PAGE_490 } from "./volume/p490";
import { PAGE_491 } from "./volume/p491";
import { PAGE_492 } from "./volume/p492";
import { PAGE_493 } from "./volume/p493";
import { PAGE_494 } from "./volume/p494";
import { PAGE_495 } from "./volume/p495";
import { PAGE_496 } from "./volume/p496";
import { PAGE_497 } from "./volume/p497";
import { PAGE_498 } from "./volume/p498";
import { PAGE_499 } from "./volume/p499";
import { PAGE_500 } from "./volume/p500";
import { PAGE_501 } from "./volume/p501";
import { PAGE_502 } from "./volume/p502";
import { PAGE_503 } from "./volume/p503";
import { PAGE_504 } from "./volume/p504";
import { PAGE_505 } from "./volume/p505";
import { PAGE_506 } from "./volume/p506";
import { PAGE_507 } from "./volume/p507";
import { PAGE_508 } from "./volume/p508";
import { PAGE_509 } from "./volume/p509";
import { PAGE_510 } from "./volume/p510";
import { PAGE_511 } from "./volume/p511";
import { PAGE_512 } from "./volume/p512";
import { PAGE_513 } from "./volume/p513";
import { PAGE_514 } from "./volume/p514";
import { PAGE_515 } from "./volume/p515";
import { PAGE_516 } from "./volume/p516";
import { PAGE_517 } from "./volume/p517";
import { PAGE_518 } from "./volume/p518";
import { PAGE_519 } from "./volume/p519";
import { PAGE_520 } from "./volume/p520";
import { PAGE_521 } from "./volume/p521";
import { PAGE_522 } from "./volume/p522";
import { PAGE_523 } from "./volume/p523";
import { PAGE_524 } from "./volume/p524";
import { PAGE_525 } from "./volume/p525";
import { PAGE_526 } from "./volume/p526";
import { PAGE_527 } from "./volume/p527";
import { PAGE_528 } from "./volume/p528";
import { PAGE_529 } from "./volume/p529";
import { PAGE_530 } from "./volume/p530";
import { PAGE_531 } from "./volume/p531";
import { PAGE_532 } from "./volume/p532";
import { PAGE_533 } from "./volume/p533";
import { PAGE_534 } from "./volume/p534";
import { PAGE_535 } from "./volume/p535";
import { PAGE_536 } from "./volume/p536";
import { PAGE_537 } from "./volume/p537";
import { PAGE_538 } from "./volume/p538";
import { PAGE_539 } from "./volume/p539";
import { PAGE_540 } from "./volume/p540";
import { PAGE_541 } from "./volume/p541";
import { PAGE_542 } from "./volume/p542";
import { PAGE_543 } from "./volume/p543";
import { PAGE_544 } from "./volume/p544";
import { PAGE_545 } from "./volume/p545";
import { PAGE_546 } from "./volume/p546";
import { PAGE_547 } from "./volume/p547";
import { PAGE_548 } from "./volume/p548";
import { PAGE_549 } from "./volume/p549";
import { PAGE_550 } from "./volume/p550";
import { PAGE_551 } from "./volume/p551";
import { PAGE_552 } from "./volume/p552";
import { PAGE_553 } from "./volume/p553";
import { PAGE_554 } from "./volume/p554";
import { PAGE_555 } from "./volume/p555";
import { PAGE_556 } from "./volume/p556";
import { PAGE_557 } from "./volume/p557";
import { PAGE_558 } from "./volume/p558";
import { PAGE_559 } from "./volume/p559";
import { PAGE_560 } from "./volume/p560";
import { PAGE_561 } from "./volume/p561";
import { PAGE_562 } from "./volume/p562";
import { PAGE_563 } from "./volume/p563";
import { PAGE_564 } from "./volume/p564";
import { PAGE_565 } from "./volume/p565";
import { PAGE_566 } from "./volume/p566";
import { PAGE_567 } from "./volume/p567";
import { PAGE_568 } from "./volume/p568";
import { PAGE_569 } from "./volume/p569";
import { PAGE_570 } from "./volume/p570";
import { PAGE_571 } from "./volume/p571";
import { PAGE_572 } from "./volume/p572";
import { PAGE_573 } from "./volume/p573";
import { PAGE_574 } from "./volume/p574";
import { PAGE_575 } from "./volume/p575";
import { PAGE_576 } from "./volume/p576";
import { PAGE_577 } from "./volume/p577";
import { PAGE_578 } from "./volume/p578";
import { PAGE_579 } from "./volume/p579";
import { PAGE_580 } from "./volume/p580";
import { PAGE_581 } from "./volume/p581";
import { PAGE_582 } from "./volume/p582";
import { PAGE_583 } from "./volume/p583";
import { PAGE_584 } from "./volume/p584";
import { PAGE_585 } from "./volume/p585";
import { PAGE_586 } from "./volume/p586";
import { PAGE_587 } from "./volume/p587";
import { PAGE_588 } from "./volume/p588";
import { PAGE_589 } from "./volume/p589";
import { PAGE_590 } from "./volume/p590";
import { PAGE_591 } from "./volume/p591";
import { PAGE_592 } from "./volume/p592";
import { PAGE_593 } from "./volume/p593";
import { PAGE_594 } from "./volume/p594";
import { PAGE_595 } from "./volume/p595";
import { PAGE_596 } from "./volume/p596";
import { PAGE_597 } from "./volume/p597";
import { PAGE_598 } from "./volume/p598";
import { PAGE_599 } from "./volume/p599";
import { PAGE_600 } from "./volume/p600";
import { PAGE_601 } from "./volume/p601";
import { PAGE_602 } from "./volume/p602";
import { PAGE_603 } from "./volume/p603";
import { PAGE_604 } from "./volume/p604";
import { PAGE_605 } from "./volume/p605";
import { PAGE_606 } from "./volume/p606";
import { PAGE_607 } from "./volume/p607";
import { PAGE_608 } from "./volume/p608";
import { PAGE_609 } from "./volume/p609";
import { PAGE_610 } from "./volume/p610";
import { PAGE_611 } from "./volume/p611";
import { PAGE_612 } from "./volume/p612";
import { PAGE_613 } from "./volume/p613";
import { PAGE_614 } from "./volume/p614";
import { PAGE_615 } from "./volume/p615";
import { PAGE_616 } from "./volume/p616";
import { PAGE_617 } from "./volume/p617";
import { PAGE_618 } from "./volume/p618";
import { PAGE_619 } from "./volume/p619";
import { PAGE_620 } from "./volume/p620";
import { PAGE_621 } from "./volume/p621";
import { PAGE_622 } from "./volume/p622";
import { PAGE_623 } from "./volume/p623";
import { PAGE_624 } from "./volume/p624";
import { PAGE_625 } from "./volume/p625";
import { PAGE_626 } from "./volume/p626";
import { PAGE_627 } from "./volume/p627";
import { PAGE_628 } from "./volume/p628";
import { PAGE_629 } from "./volume/p629";
import { PAGE_630 } from "./volume/p630";
import { PAGE_631 } from "./volume/p631";
import { PAGE_632 } from "./volume/p632";
import { PAGE_633 } from "./volume/p633";
import { PAGE_634 } from "./volume/p634";
import { PAGE_635 } from "./volume/p635";
import { PAGE_636 } from "./volume/p636";
import { PAGE_637 } from "./volume/p637";
import { PAGE_638 } from "./volume/p638";
import { PAGE_639 } from "./volume/p639";
import { PAGE_640 } from "./volume/p640";
import { PAGE_641 } from "./volume/p641";
import { PAGE_642 } from "./volume/p642";
import { PAGE_643 } from "./volume/p643";
import { PAGE_644 } from "./volume/p644";
import { PAGE_645 } from "./volume/p645";
import { PAGE_646 } from "./volume/p646";
import { PAGE_647 } from "./volume/p647";
import { PAGE_648 } from "./volume/p648";
import { PAGE_649 } from "./volume/p649";
import { PAGE_650 } from "./volume/p650";
import { PAGE_651 } from "./volume/p651";
import { PAGE_652 } from "./volume/p652";
import { PAGE_653 } from "./volume/p653";
import { PAGE_654 } from "./volume/p654";
import { PAGE_655 } from "./volume/p655";
import { PAGE_656 } from "./volume/p656";
import { PAGE_657 } from "./volume/p657";
import { PAGE_658 } from "./volume/p658";
import { PAGE_659 } from "./volume/p659";
import { PAGE_660 } from "./volume/p660";
import { PAGE_661 } from "./volume/p661";
import { PAGE_662 } from "./volume/p662";
import { PAGE_663 } from "./volume/p663";
import { PAGE_664 } from "./volume/p664";
import { PAGE_665 } from "./volume/p665";
import { PAGE_666 } from "./volume/p666";
import { PAGE_667 } from "./volume/p667";
import { PAGE_668 } from "./volume/p668";
import { PAGE_669 } from "./volume/p669";
import { PAGE_670 } from "./volume/p670";
import { PAGE_671 } from "./volume/p671";
import { PAGE_672 } from "./volume/p672";
import { PAGE_673 } from "./volume/p673";
import { PAGE_674 } from "./volume/p674";
import { PAGE_675 } from "./volume/p675";
import { PAGE_676 } from "./volume/p676";
import { PAGE_677 } from "./volume/p677";
import { PAGE_678 } from "./volume/p678";
import { PAGE_679 } from "./volume/p679";
import { PAGE_680 } from "./volume/p680";
import { PAGE_681 } from "./volume/p681";
import { PAGE_682 } from "./volume/p682";
import { PAGE_683 } from "./volume/p683";
import { PAGE_684 } from "./volume/p684";
import { PAGE_685 } from "./volume/p685";
import { PAGE_686 } from "./volume/p686";
import { PAGE_687 } from "./volume/p687";
import { PAGE_688 } from "./volume/p688";
import { PAGE_689 } from "./volume/p689";
import { PAGE_690 } from "./volume/p690";
import { PAGE_691 } from "./volume/p691";
import { PAGE_692 } from "./volume/p692";
import { PAGE_693 } from "./volume/p693";
import { PAGE_694 } from "./volume/p694";
import { PAGE_695 } from "./volume/p695";
import { PAGE_696 } from "./volume/p696";
import { PAGE_697 } from "./volume/p697";
import { PAGE_698 } from "./volume/p698";
import { PAGE_699 } from "./volume/p699";
import { PAGE_700 } from "./volume/p700";
import { PAGE_701 } from "./volume/p701";
import { PAGE_702 } from "./volume/p702";
import { PAGE_703 } from "./volume/p703";
import { PAGE_704 } from "./volume/p704";
import { PAGE_705 } from "./volume/p705";
import { PAGE_706 } from "./volume/p706";
import { PAGE_707 } from "./volume/p707";
import { PAGE_708 } from "./volume/p708";
import { PAGE_709 } from "./volume/p709";
import { PAGE_710 } from "./volume/p710";
import { PAGE_711 } from "./volume/p711";
import { PAGE_712 } from "./volume/p712";
import { PAGE_713 } from "./volume/p713";
import { PAGE_714 } from "./volume/p714";
import { PAGE_715 } from "./volume/p715";
import { PAGE_716 } from "./volume/p716";
import { PAGE_717 } from "./volume/p717";
import { PAGE_718 } from "./volume/p718";
import { PAGE_719 } from "./volume/p719";
import { PAGE_720 } from "./volume/p720";
import { PAGE_721 } from "./volume/p721";
import { PAGE_722 } from "./volume/p722";
import { PAGE_723 } from "./volume/p723";
import { PAGE_724 } from "./volume/p724";
import { PAGE_725 } from "./volume/p725";
import { PAGE_726 } from "./volume/p726";
import { PAGE_727 } from "./volume/p727";
import { PAGE_728 } from "./volume/p728";
import { PAGE_729 } from "./volume/p729";
import { PAGE_730 } from "./volume/p730";
import { PAGE_731 } from "./volume/p731";
import { PAGE_732 } from "./volume/p732";
import { PAGE_733 } from "./volume/p733";
import { PAGE_734 } from "./volume/p734";
import { PAGE_735 } from "./volume/p735";
import { PAGE_736 } from "./volume/p736";
import { PAGE_737 } from "./volume/p737";
import { PAGE_738 } from "./volume/p738";
import { PAGE_739 } from "./volume/p739";
import { PAGE_740 } from "./volume/p740";
import { PAGE_741 } from "./volume/p741";
import { PAGE_742 } from "./volume/p742";
import { PAGE_743 } from "./volume/p743";
import { PAGE_744 } from "./volume/p744";
import { PAGE_745 } from "./volume/p745";
import { PAGE_746 } from "./volume/p746";
import { PAGE_747 } from "./volume/p747";
import { PAGE_748 } from "./volume/p748";
import { PAGE_749 } from "./volume/p749";
import { PAGE_750 } from "./volume/p750";
import { PAGE_751 } from "./volume/p751";
import { PAGE_752 } from "./volume/p752";
import { PAGE_753 } from "./volume/p753";
import { PAGE_754 } from "./volume/p754";
import { PAGE_755 } from "./volume/p755";
import { PAGE_756 } from "./volume/p756";
import { PAGE_757 } from "./volume/p757";
import { PAGE_758 } from "./volume/p758";
import { PAGE_759 } from "./volume/p759";
import { PAGE_760 } from "./volume/p760";
import { PAGE_761 } from "./volume/p761";
import { PAGE_762 } from "./volume/p762";
import { PAGE_763 } from "./volume/p763";
import { PAGE_764 } from "./volume/p764";
import { PAGE_765 } from "./volume/p765";
import { PAGE_766 } from "./volume/p766";
import { PAGE_767 } from "./volume/p767";
import { PAGE_768 } from "./volume/p768";
import { PAGE_769 } from "./volume/p769";
import { PAGE_770 } from "./volume/p770";
import { PAGE_771 } from "./volume/p771";
import { PAGE_772 } from "./volume/p772";
import { PAGE_773 } from "./volume/p773";
import { PAGE_774 } from "./volume/p774";
import { PAGE_775 } from "./volume/p775";
import { PAGE_776 } from "./volume/p776";
import { PAGE_777 } from "./volume/p777";
import { PAGE_778 } from "./volume/p778";
import { PAGE_779 } from "./volume/p779";
import { PAGE_780 } from "./volume/p780";
import { PAGE_781 } from "./volume/p781";
import { PAGE_782 } from "./volume/p782";
import { PAGE_783 } from "./volume/p783";
import { PAGE_784 } from "./volume/p784";
import { PAGE_785 } from "./volume/p785";
import { PAGE_786 } from "./volume/p786";
import { PAGE_787 } from "./volume/p787";
import { PAGE_788 } from "./volume/p788";
import { PAGE_789 } from "./volume/p789";
import { PAGE_790 } from "./volume/p790";
import { PAGE_791 } from "./volume/p791";
import { PAGE_792 } from "./volume/p792";
import { PAGE_793 } from "./volume/p793";
import { PAGE_794 } from "./volume/p794";
import { PAGE_795 } from "./volume/p795";
import { PAGE_796 } from "./volume/p796";
import { PAGE_797 } from "./volume/p797";
import { PAGE_798 } from "./volume/p798";
import { PAGE_799 } from "./volume/p799";
import { PAGE_800 } from "./volume/p800";
import { PAGE_801 } from "./volume/p801";
import { PAGE_802 } from "./volume/p802";
import { PAGE_803 } from "./volume/p803";
import { PAGE_804 } from "./volume/p804";
import { PAGE_805 } from "./volume/p805";
import { PAGE_806 } from "./volume/p806";
import { PAGE_807 } from "./volume/p807";
import { PAGE_808 } from "./volume/p808";
import { PAGE_809 } from "./volume/p809";
import { PAGE_810 } from "./volume/p810";
import { PAGE_811 } from "./volume/p811";
import { PAGE_812 } from "./volume/p812";
import { PAGE_813 } from "./volume/p813";
import { PAGE_814 } from "./volume/p814";
import { PAGE_815 } from "./volume/p815";
import { PAGE_816 } from "./volume/p816";
import { PAGE_817 } from "./volume/p817";
import { PAGE_818 } from "./volume/p818";
import { PAGE_819 } from "./volume/p819";
import { PAGE_820 } from "./volume/p820";
import { PAGE_821 } from "./volume/p821";
import { PAGE_822 } from "./volume/p822";
import { PAGE_823 } from "./volume/p823";
import { PAGE_824 } from "./volume/p824";
import { PAGE_825 } from "./volume/p825";
import { PAGE_826 } from "./volume/p826";
import { PAGE_827 } from "./volume/p827";
import { PAGE_828 } from "./volume/p828";
import { PAGE_829 } from "./volume/p829";
import { PAGE_830 } from "./volume/p830";
import { PAGE_831 } from "./volume/p831";
import { PAGE_832 } from "./volume/p832";
import { PAGE_833 } from "./volume/p833";
import { PAGE_834 } from "./volume/p834";
import { PAGE_835 } from "./volume/p835";
import { PAGE_836 } from "./volume/p836";
import { PAGE_837 } from "./volume/p837";
import { PAGE_838 } from "./volume/p838";
import { PAGE_839 } from "./volume/p839";
import { PAGE_840 } from "./volume/p840";
import { PAGE_841 } from "./volume/p841";
import { PAGE_842 } from "./volume/p842";
import { PAGE_843 } from "./volume/p843";
import { PAGE_844 } from "./volume/p844";
import { PAGE_845 } from "./volume/p845";
import { PAGE_846 } from "./volume/p846";
import { PAGE_847 } from "./volume/p847";
import { PAGE_848 } from "./volume/p848";
import { PAGE_849 } from "./volume/p849";
import { PAGE_850 } from "./volume/p850";
import { PAGE_851 } from "./volume/p851";
import { PAGE_852 } from "./volume/p852";
import { PAGE_853 } from "./volume/p853";
import { PAGE_854 } from "./volume/p854";
import { PAGE_855 } from "./volume/p855";
import { PAGE_856 } from "./volume/p856";
import { PAGE_857 } from "./volume/p857";
import { PAGE_858 } from "./volume/p858";
import { PAGE_859 } from "./volume/p859";
import { PAGE_860 } from "./volume/p860";
import { PAGE_861 } from "./volume/p861";
import { PAGE_862 } from "./volume/p862";
import { PAGE_863 } from "./volume/p863";
import { PAGE_864 } from "./volume/p864";
import { PAGE_865 } from "./volume/p865";
import { PAGE_866 } from "./volume/p866";
import { PAGE_867 } from "./volume/p867";
import { PAGE_868 } from "./volume/p868";
import { PAGE_869 } from "./volume/p869";
import { PAGE_870 } from "./volume/p870";
import { PAGE_871 } from "./volume/p871";
import { PAGE_872 } from "./volume/p872";
import { PAGE_873 } from "./volume/p873";
import { PAGE_874 } from "./volume/p874";
import { PAGE_875 } from "./volume/p875";
import { PAGE_876 } from "./volume/p876";
import { PAGE_877 } from "./volume/p877";
import { REST_PAGES, BACK_PAGES } from "./volume/rest";

export type { Block, EncPage, Figure, ViewMode };

const L = (html: string): Block => ({ kind: "p", html });
const B = (html: string): Block => ({ kind: "bibl", html });
const F = (figure: Figure): Block => ({ kind: "figure", figure });

/** Fraktur → Antiqua. 1929-Orthographie und Verweise (→) bewahrt. */
export const PAGES: EncPage[] = markTafelPages([
  {
    printed: 1,
    scanFile: 9,
    headerLeft: "Asunción",
    headerRight: "Asur",
    catchword: "Residenzstadt",
    signature: "Großer Brockhaus. 2.",
    scanSrc: "/scans/p01.jpg",
    left: [
      { kind: "drop" },
      L(
        `<strong><span class="sr-only">A</span>sunción</strong> [asunziọn, span. ›Maria Himmelfahrt‹]. 1)&nbsp;A., portug. Assumpção, Hauptstadt der südamerik. Rep. Paraguay (Karte 108, E&nbsp;3), einschl. der Vororte Limpio, Luque, San Lorenzo und San Antonio (1920) 100000&nbsp;E., am l. Ufer des Paraguay gelegen, auf sanft ansteigendem Hügelgelände. Unter`,
      ),
      F({
        src: "/layout/p01/g01.png",
        alt: "Lageplan von Asunción, Originalabbildung 1929",
        caption: "Lageplan von Asunción.",
      }),
      L(
        `den architektonisch schönen Gebäuden ist bes. der Regierungspalast und das unvollendete Oratorio de la Virgen de la Asunción zu erwähnen; Universität, Bibliothek, Archiv, Museum, Botan. Garten. Deutsche Gemeinde mit deutscher Schule, deutsche Gesandtschaft. A. ist Industriestadt und infolge seiner günstigen Lage wichtigster Handels- und Verkehrsplatz des Landes. Durch Eisenbahn steht es mit Buenos Aires (2 Tage Fahrt), durch den Paraguayfluß mit Brasilien und den Paraná-La-Plata-Ländern in reger Verbindung.`,
      ),
      F({
        src: "/layout/p01/g02.png",
        alt: "Asunción, Calle Colón, Originalphotographie 1929",
        caption: "Asunción: Calle Colón.",
      }),
      L(
        `A., 1536 durch Juan de Ayolas gegründet, war bis 1620 Hauptstadt der span. La-Plata-Länder. Die Stadt wurde von dem Diktator Francia umge-`,
      ),
    ],
    right: [
      L(
        `baut; im Krieg Paraguays gegen Argentinien und Brasilien (1864—70) verlor sie den größten Teil der Einwohnerschaft.`,
      ),
      L(
        `2)&nbsp;Eine Insel der nördl. Marianen (Mikronesien) mit 870&nbsp;m hohem, tätigem Vulkan. A. war bis 1920 deutsch und ist jetzt japan. Mandat.`,
      ),
      L(
        `<strong>Asung</strong>, die Nahrung des Wildes (→Äsen).`,
      ),
      L(
        `<strong>Asur, Aschur</strong>, Hauptgott der Assyrer. Sein Kult blieb im wesentlichen immer auf die Stadt Assur beschränkt, nach der er wahrscheinlich genannt ist; nur als Reichsgott von Assyrien besaß er größeren Einfluß. Sein Tempel in Assur ist durch die Deutsche Orientgesellschaft ausgegraben worden.`,
      ),
      L(
        `<strong>Asura</strong> [altind. ›geistig‹, ›göttlich‹], im Rigveda Beiname des Djaus, Waruna und anderer Götter, zuweilen auch schon Bezeichnung der Dämonen. Vom Atharwaweda an bedeutet A. ausschließlich »böser Geist«. Seinem urspr. Sinn nach ist A. identisch mit dem altiranischen Ahura in Ahura Mazda (Ormuzd).`,
      ),
      B(
        `Geldner: Zoroaster (in der Encyclopaedia Britannica, 11.&nbsp;Aufl., London 1924).`,
      ),
      L(
        `<strong>Asurbanipal</strong>, Assyrerkönig (→Assyrische Kunst, Abb.&nbsp;3). Als jüngerer Sohn →Asarhaddons ursprünglich für die priesterliche Laufbahn bestimmt, hatte er eine sorgfältige literar. Erziehung genossen, durch die er sich vor allen andern Assyrerkönigen auszeichnete. 669&nbsp;v.&nbsp;Chr. bestieg er den Thron. Mit seinem Bruder Schamasch-schum-ukin, der Babylon bei der Thronfolge erhalten hatte, geriet er in Krieg, der mit der Eroberung Babylons 648&nbsp;v.&nbsp;Chr. endete. Ägypten, das er gleich zu Anfang seiner Regierung und dann noch einmal 662 durch Feldzüge gesichert hatte, ging damals dem Reiche für immer verloren. In Syrien und Palästina hielt er die assyr. Macht aufrecht. Lydien unter Gyges hat ihm sogar gehuldigt. Mit Armenien (→Urartu) pflegte A. freundschaftliche Beziehungen; auch mit den Skythen hielt er Freundschaft. Nach der Eroberung Elams, etwa 639&nbsp;v.&nbsp;Chr., brechen die Nachrichten über seine Regierungszeit ab. Er scheint sich damals von den milit. Geschäften abgewandt zu haben und mehr literar. und künstlerischen Neigungen nachgegangen zu sein. Die von ihm angelegte große Bibliothek hat noch der modernen Assyriologie unschätzbare Dienste geleistet, da der Fund dieser Tontafelbücher in Kujundschik, dem alten Ninive, der Assyriologie die Grundlagen für ihren weiteren Ausbau lieferte. In allen Städten Babyloniens wie Assyriens hat A. eine reiche Bautätigkeit entfaltet; am wichtigsten ist der Ausbau eines alten und die Errichtung eines neuen Palastes in Ninive. Den Griechen, denen er unter dem Namen Sardanapal bekannt wurde, galt er als das Urbild eines Schwelgers, was den geschichtl. Tatsachen wenig entspricht.`,
      ),
      B(
        `Streck: Asurbanipal (1916); Meißner: Könige Babyloniens und Assyriens (1926).`,
      ),
      L(
        `<strong>Asurnasirpal&nbsp;II.</strong>, Assyrerkönig (883—859&nbsp;v.&nbsp;Chr.), besiegte die Aramäer in der mesopot. Steppe und erzwang von den syr. Staaten Tribut. Als`,
      ),
    ],
  },
  {
    printed: 2,
    scanFile: 10,
    headerLeft: "Asur",
    headerRight: "Asurol — Asymmetrie",
    catchword: "nach",
    scanSrc: "/scans/p02.jpg",
    left: [
      L(
        `Residenzstadt wählte er sich →Kalach, wo er einen prächtigen Palast baute (→Assyrische Kunst). Die Verwaltung und das Heerwesen ordnete er neu.`,
      ),
      F({
        src: "/layout/p02/g01.png",
        alt: "Asurbanipal, Originalabbildung 1929",
        caption: "Asurbanipal.",
        float: "right",
      }),
      L(
        `<strong>Asurol</strong>, organ. Quecksilbersalz, Heilmittel bei Syphilis.`,
      ),
      L(`<strong>Asus</strong>, kelt. Gott, →Esus.`),
      L(`<strong>Aswattha</strong>, ostind. Feigenbaum, →Ficus.`),
      L(`<strong>Aswin</strong>, ind. Götter, →Aschwín.`),
      L(
        `<strong>Aswad, Bahr el</strong>, arab. Name des Flusses →Atbara.`,
      ),
      L(
        `<strong>Aswan, Assuan</strong>, kopt. Suan, grch. Syene, Hauptstadt der oberägypt. Mudiria A. (437&nbsp;qkm, 254000&nbsp;E.), die südl. von`,
      ),
      F({
        src: "/layout/p02/g02.png",
        alt: "Assuan, Originalphotographie 1929",
        caption: "Assuan.",
        float: "right",
      }),
      L(
        `trockenem Klima ist A. als Winterkurort (bes. für Nierenleidende) sehr beliebt. Der einst blühende Handel mit den obern Niländern und Abessinien ist sehr zurückgegangen. Oberhalb von A. wurde 1898—1902 ein 1960&nbsp;m langer Staudamm durch den Nil geführt. Schiffszugang von A. für den Verkehr mit Wadi Halfa ist Schellal. Im Altertum bildete A. mit der gegenüberliegenden Insel Elephantine die Südgrenze Ägyptens und war bes. wegen seiner Granitbrüche von Wichtigkeit.`,
      ),
      L(
        `<strong>Asyl</strong> [grch. asylon], ein geheiligter, im Götterschutz stehender Ort, bei den Juden 6 Freistätten und der Tempel Salomos, bei den Griechen verschiedene Tempel (z.&nbsp;B. der des Apollo zu Delos und des Zeus Lykaios in Arkadien) und einige Städte. Dort genoß jeder Verfolgte Frieden und Schutz. Im alten Rom galten einige Tempel als Zufluchtsstätten für Sklaven. In der Kaiserzeit gewährten die Kaiserbilder Schutz gegen jede Verfolgung. Das mittelalterliche A. hat sich wahrscheinlich aus der spätröm. Sitte entwickelt, bei den Bischöfen für Angeklagte und Verurteilte Fürbitte einzulegen. Auf diese Weise wurden die Kirche und die angrenzenden Räume zum A. Neben diesen kirchl. gab es auch einige wenige weltl. Freistätten.`,
      ),
      L(
        `A. ist auch Name für Anstalten zur vorübergehenden Aufnahme Schutzbedürftiger. Zufluchtsstätten: Magdalenenasyl, Kinderasyl. Am meisten noch gebräuchlich in →Obdachlosenasyl.`,
      ),
      B(
        `Hinschius: Kirchenrecht (6&nbsp;Bd., 1869—97); Göller: Elemente des kirchl. Asylrechts (1911).`,
      ),
      L(
        `<strong>Asylrecht</strong>, der rechtl. Anspruch eines Verfolgten auf Aufnahme in einem Zufluchtsort (→Asyl). Das A. ist, soziologisch betrachtet, eine Einrichtung, die als eine Art Heilmittel der →Blutrache angewendet wird. Ursprünglich allerdings knüpft das A. an rein religiöse Auffassungen an, nämlich an die einer besonderen Wirkungskraft (→Mana, →Meidung, →Tabu), die von gewissen Gegenständen, Tieren, Menschen, Körperteilen usw. auszugehen betrachtet wird (→Ritualismus). Derartige Objekte oder Menschen (→König, →Priester) werden als mit geheimnisvoller Wirkungskraft geladen betrachtet, so daß ihre Berührung als gefährlich gilt oder doch nur unter besonderer Vorsicht stattfinden darf. Eine derartige Heiligkeit erstreckt sich je nach den Umständen auch auf Haine, Grabstätten, Tempel, Fürsten- oder Priesterwohnungen u.&nbsp;dgl.`,
      ),
    ],
    right: [
      L(
        `Durch Berührung oder dadurch, daß jemand auf irgendeine Weise in Verbindung mit den geheiligten Objekten tritt, z.&nbsp;B. in den Schatten einer Person sich begibt, ja manchmal nur den betreffenden →Namen ausspricht u.&nbsp;dgl., wird er dieser mystischen Wirkungskraft teilhaftig, und seine Verletzung würde die Rache übernatürl. Kräfte wachrufen. Diese Vorstellung wurde nun für das Rechtsleben genutzt und als Heilmittel für Lücken und Schäden der Blutracheordnung angewendet; bes. ließen Priester oder andere einflußreiche Personen beim Vorliegen mildernder Umstände das A. geltend machen.`,
      ),
      L(
        `Die Schweiz gewährt wegen polit. Vergehen verfolgten Ausländern A., doch besteht ein Rechtsanspruch in keinem Fall. Über die Auslieferung eines Flüchtlings wegen eines Verbrechens entscheidet, sofern der Flüchtling dessen polit. Charakter geltend macht, das Bundesgericht.`,
      ),
      L(`<strong>Asymmetrie</strong> [grch.], Mangel an →Symmetrie.`),
      L(
        `In der Chemie ist A. des Molekülbaus dann vorhanden, wenn Moleküle ein Kohlenstoffatom enthalten, an dessen Tetraederecken vier verschiedene Radikale gebunden sind (→Asymmetrisches Kohlenstoffatom). Hierdurch wird eine Spiegelbildisomerie bewirkt, die opt. Aktivität zur Folge hat. In gleicher Weise wie der Kohlenstoff können in einzelnen Fällen auch Stickstoff, Schwefel, Selen, Silizium und Zinn als asymmetrische Zentralatome in organ. Verbindungen auftreten. Weiter kennt man eine große Reihe komplexer anorgan. Salze, deren Moleküle Spiegelbildisomerie zeigen, d.&nbsp;h. asymmetrischen Aufbau besitzen; es sind dies Verbindungen von Kobalt, Chrom, Eisen, Rhodium, Platin und Iridium (→Isomerie, →Wernersche Theorie). — Unter asymmetrischer Analyse versteht man die Verfahren zur Herstellung opt.-aktiver Verbindungen aus razemischen Gemischen (→Razemisch), unter asymmetrischer Synthese den Aufbau opt.-aktiver Körper aus nichtrazemischen Stoffen.`,
      ),
      F({
        src: "/layout/p02/g03.png",
        alt: "Blatt der Flatterrüster Ulmus effusa, Originalzeichnung 1929",
        caption: "Asymmetrie: Blatt der Flatterrüster Ulmus effusa. (½ nat. Gr.)",
        float: "right",
      }),
      L(
        `Von Tieren und Pflanzen und deren Teilen nennt man solche asymmetrisch, bei denen die Anordnung der Teile in keiner Richtung des Raumes gesetzmäßig bestimmt ist, weder`,
      ),
    ],
  },
  {
    printed: 3,
    scanFile: 11,
    headerLeft: "Asymmetrisches Kohlenstoffatom — Ata",
    headerRight: "Ata",
    catchword: "Ataman",
    scanSrc: "/scans/p03.jpg",
    left: [
      L(
        `nach Achsen noch nach Symmetrieebenen, die zueinander parallel wären. Solche A. zeigen z.&nbsp;B. das Blatt von Rüster und Begonie, die Blüte von Canna und Baldrian, Schwämme, Korallen, irreguläre Seeigel.`,
      ),
      L(
        `<strong>Asymmetrisches Kohlenstoffatom</strong>, nach Le&nbsp;Bel und van&nbsp;’t&nbsp;Hoff Bezeichnung eines Kohlenstoffatoms, das mit vier verschiedenen Elementen oder Radikalen verbunden ist. Verbindungen mit A.&nbsp;K. kommen stets in zwei Formen vor, von denen die eine die Ebene des polarisierten Lichtes nach rechts, die andere um denselben Betrag nach links dreht. Diese optische Isomerie erklärt sich aus den räumlichen Verhältnissen um das Kohlenstoffatom herum, das in seinen Verbindungen im Mittelpunkt eines Tetraeders steht, während die vier Radikale a, b, c, d die Ecken dieses Körpers besetzen. Es sind dann zwei verschiedene Anordnungen möglich, die sich wie Bild und Spiegelbild verhalten und die Isomerie bedingen.`,
      ),
      F({
        src: "/layout/p03/g01.png",
        alt: "Asymmetrisches Kohlenstoffatom, optisch rechtsdrehend, Originalzeichnung 1929",
        caption: "Asymmetrisches Kohlenstoffatom, optisch rechtsdrehend.",
      }),
      F({
        src: "/layout/p03/g02.png",
        alt: "Asymmetrisches Kohlenstoffatom, optisch linksdrehend, Originalzeichnung 1929",
        caption: "Asymmetrisches Kohlenstoffatom, optisch linksdrehend.",
      }),
      L(
        `<strong>Asymmetron</strong>, Gatt. der →Lanzettfischchen.`,
      ),
      L(
        `<strong>Asymneten</strong> [grch. ›Gebieterwahlte‹], nach Aristoteles »gewählte Tyrannen«, lebenslänglich oder zur Lösung einer bestimmten Aufgabe bestellte Beamte mit monarchischer Gewalt, die in den griech. Staaten des 7. und 6. Jahrh. v. Chr. zur Beseitigung der sozialen und polit. Kämpfe eingesetzt wurden.`,
      ),
      L(
        `<strong>Asymptote</strong> [grch.], diejenige Gerade, welche von einem Kurvenzweig in unendlicher Entfernung berührt, d.&nbsp;h. zur Tangente wird. Die A. kann auch als diejenige Gerade definiert werden, deren Abstand von einem Kurvenpunkt, der sich auf dem Kurvenzweig ins Unendliche entfernt, gegen Null konvergiert, ohne daß die Gerade die Kurve in endlicher Entfernung berührt. (→Kurve, →Kegelschnitte.)`,
      ),
      F({
        src: "/layout/p03/g03.png",
        alt: "Asymptote der Hyperbel, Originalzeichnung 1929",
        caption: "Asymptote der Hyperbel.",
        float: "right",
      }),
      L(
        `<strong>Asynchron</strong> [grch.], ungleichzeitig, ohne Takt; in der Elektrotechnik: A.maschine, →Induktionsmaschine, A.motor, →Induktionsmotor.`,
      ),
    ],
    right: [
      L(
        `<strong>Asyndeton</strong> [grch.], die unverbundene, d.&nbsp;h. ohne Konjunktionen (bes. ohne »und«) erfolgende Aneinanderreihung von Wörtern oder Satzteilen, z.&nbsp;B. »veni, vidi, vici« (ich kam, ich sah, ich siegte). Gegensatz: →Polysyndeton.`,
      ),
      L(
        `<strong>Asynergia</strong> [grch.], das Fehlen des geordneten Zusammenwirkens der Muskeln (→Ataxie).`,
      ),
      L(
        `<strong>Asyntaktisch</strong> [grch.], nicht den Regeln der →Syntax entsprechend.`,
      ),
      L(
        `<strong>Asyut, Assiut, Siut</strong>, Hauptstadt der oberägypt. Mudiria A. (2051&nbsp;qkm, 981000&nbsp;E.), am l. Nilufer, (1927) 28400&nbsp;E. A. ist Bahnstation der Niltalbahn, Ausgangspunkt der Bahn nach der Oase Charga, hat kopt. Bischofssitz, amerik. Mission, große Teppichweberei, Elfenbeinschnitzerei, Handel mit Getreide, Baumwolle, Datteln, Zucker. Im Altertum Lykopolis, Kultstätte des wolfsgestaltigen Gottes Up-uaut (Wepwawet).`,
      ),
      L(
        `<strong>Atacamit</strong>, Mineral in grünen durchsichtigen Kristallen, basisches Kupferchlorid, Cu<sub>2</sub>Cl(OH)<sub>3</sub>, rhombisch, auf Kupfererzlagerstätten, bes. in Chile (bei Atacama), in Bolivien und Australien.`,
      ),
      L(
        `<strong>Atacama</strong>, 1)&nbsp;Wüste im nördl. Chile, zwischen der Kordillere und dem Stillen Ozean, etwa 100&nbsp;km breit, vom Wendekreis des Steinbocks bis 27°&nbsp;s.&nbsp;Br., 400–2000&nbsp;m ü.&nbsp;M., reich an Bodenschätzen, bes. Salpeter, Kupfer und Silbererzen. In der Kälte herrscht fast vollkommene Regenlosigkeit. Die wenigen Flüsse versiegen. In den Senken kleine Salzseen. Seitdem Chile nach dem Salpeterkrieg (1879–84) die ehem. peruan. und bolivian. Teile der Wüste an sich gebracht hat, ist sie wirtschaftl. erschlossen. Eisenbahn, Bergbau und Salpetergewinnung. Wichtigste Häfen: Iquique, Antofagasta. Die urspr. Bewohner, die Atacameños, sterben aus.`,
      ),
      L(
        `2)&nbsp;Prov. in Chile, 79811&nbsp;qkm, (1920) 172361&nbsp;E. Hauptstadt Copiapó.`,
      ),
      L(
        `<strong>Atahualpa</strong>, letzter König der Inka (Peru), Sohn des Huayna Capac, teilte sich nach dessen Tode (1525) mit seinem Halbbruder Huascar in die Herrschaft (A. erhielt Quito, Huascar Cuzco), besiegte 1532 Huascar, wurde aber von den Spaniern unter Pizarro gefangengenommen und, obwohl er das geforderte Lösegeld (ein Zimmer voll Gold) entrichtet hatte, 29.&nbsp;Aug. 1533 hingerichtet.`,
      ),
      L(
        `<strong>Atalante</strong>, 1)&nbsp;in der griech. Sage eine arkad. Jägerin, Teilnehmerin an der Jagd auf den kalydon. Eber und am Argonautenzug. Sie wollte nur den zum Gemahl, der sie im Wettlauf besiegte. Hippomenes (oder Melanion) besiegte sie, indem er während des Laufes drei goldene Äpfel (von Aphrodite erhalten) fallen ließ, nach denen A. sich bückte. Zur Strafe für die Entweihung eines Heiligtums der Kybele (oder des Zeus) wurden beide in Löwen verwandelt.`,
      ),
      L(
        `2)&nbsp;Stadt in der opunt. Lokris, auf einer Insel im Atalantekanal, 426&nbsp;v.&nbsp;Chr. von den Athenern befestigt.`,
      ),
      L(
        `<strong>Atalantekanal</strong>, Golf von Euböa (Karte 72, C&nbsp;2), zwischen Euböa und dem Festland, nördl. von der Meerenge von Euripos, 10–20&nbsp;km breit, geht im N in den Golf von Lamia über.`,
      ),
    ],
  },
  PAGE_04,
  PAGE_05,
  PAGE_06,
  PAGE_07,
  PAGE_08,
  PAGE_08_TAFEL,
  PAGE_09,
  PAGE_10,
  PAGE_11,
  PAGE_12,
  PAGE_13,
  PAGE_14,
  PAGE_15,
  PAGE_16,
  PAGE_17,
  PAGE_18,
  PAGE_19,
  PAGE_20,
  PAGE_21,
  PAGE_22,
  PAGE_23,
  PAGE_24,
  PAGE_25,
  PAGE_26,
  PAGE_27,
  PAGE_28,
  PAGE_29,
  PAGE_30,
  PAGE_31,
  PAGE_32,
  PAGE_33,
  PAGE_34,
  PAGE_35,
  PAGE_36,
  PAGE_37,
  PAGE_38,
  PAGE_39,
  PAGE_40,
  PAGE_41,
  PAGE_42,
  PAGE_43,
  PAGE_44,
  PAGE_45,
  PAGE_46,
  PAGE_47,
  PAGE_48,
  PAGE_49,
  PAGE_50,
  PAGE_51,
  PAGE_52,
  PAGE_53,
  PAGE_54,
  PAGE_55,
  PAGE_56,
  PAGE_57,
  PAGE_58,
  PAGE_59,
  PAGE_60,
  PAGE_61,
  PAGE_62,
  PAGE_63,
  PAGE_64,
  PAGE_65,
  PAGE_66,
  PAGE_67,
  PAGE_68,
  PAGE_69,
  PAGE_70,
  PAGE_71,
  PAGE_72,
  PAGE_73,
  PAGE_74,
  PAGE_75,
  PAGE_76,
  PAGE_77,
  PAGE_78,
  PAGE_79,
  PAGE_80,
  PAGE_81,
  PAGE_82,
  PAGE_83,
  PAGE_84,
  PAGE_85,
  PAGE_86,
  PAGE_87,
  PAGE_88,
  PAGE_89,
  PAGE_90,
  PAGE_91,
  PAGE_92,
  PAGE_93,
  PAGE_94,
  PAGE_95,
  PAGE_96,
  PAGE_97,
  PAGE_98,
  PAGE_99,
  PAGE_100,
  PAGE_101,
  PAGE_102,
  PAGE_103,
  PAGE_104,
  PAGE_105,
  PAGE_106,
  PAGE_107,
  PAGE_108,
  PAGE_109,
  PAGE_110,
  PAGE_111,
  PAGE_112,
  PAGE_113,
  PAGE_114,
  PAGE_115,
  PAGE_116,
  PAGE_117,
  PAGE_118,
  PAGE_119,
  PAGE_120,
  PAGE_121,
  PAGE_122,
  PAGE_123,
  PAGE_124,
  PAGE_125,
  PAGE_126,
  PAGE_127,
  PAGE_128,
  PAGE_129,
  PAGE_130,
  PAGE_131,
  PAGE_132,
  PAGE_133,
  PAGE_134,
  PAGE_135,
  PAGE_136,
  PAGE_137,
  PAGE_138,
  PAGE_139,
  PAGE_140,
  PAGE_141,
  PAGE_142,
  PAGE_143,
  PAGE_144,
  PAGE_145,
  PAGE_146,
  PAGE_147,
  PAGE_148,
  PAGE_149,
  PAGE_150,
  PAGE_151,
  PAGE_152,
  PAGE_153,
  PAGE_154,
  PAGE_155,
  PAGE_156,
  PAGE_157,
  PAGE_158,
  PAGE_159,
  PAGE_160,
  PAGE_161,
  PAGE_162,
  PAGE_163,
  PAGE_164,
  PAGE_165,
  PAGE_166,
  PAGE_167,
  PAGE_168,
  PAGE_169,
  PAGE_170,
  PAGE_171,
  PAGE_172,
  PAGE_173,
  PAGE_174,
  PAGE_175,
  PAGE_176,
  PAGE_177,
  PAGE_178,
  PAGE_179,
  PAGE_180,
  PAGE_181,
  PAGE_182,
  PAGE_183,
  PAGE_184,
  PAGE_185,
  PAGE_186,
  PAGE_187,
  PAGE_188,
  PAGE_189,
  PAGE_190,
  PAGE_191,
  PAGE_192,
  PAGE_193,
  PAGE_194,
  PAGE_195,
  PAGE_196,
  PAGE_197,
  PAGE_198,
  PAGE_199,
  PAGE_200,
  PAGE_201,
  PAGE_202,
  PAGE_203,
  PAGE_204,
  PAGE_205,
  PAGE_206,
  PAGE_207,
  PAGE_208,
  PAGE_209,
  PAGE_210,
  PAGE_211,
  PAGE_212,
  PAGE_213,
  PAGE_214,
  PAGE_215,
  PAGE_216,
  PAGE_217,
  PAGE_218,
  PAGE_219,
  PAGE_220,
  PAGE_221,
  PAGE_222,
  PAGE_223,
  PAGE_224,
  PAGE_225,
  PAGE_226,
  PAGE_227,
  PAGE_228,
  PAGE_229,
  PAGE_230,
  PAGE_231,
  PAGE_232,
  PAGE_233,
  PAGE_234,
  PAGE_235,
  PAGE_236,
  PAGE_237,
  PAGE_238,
  PAGE_239,
  PAGE_240,
  PAGE_241,
  PAGE_242,
  PAGE_243,
  PAGE_244,
  PAGE_245,
  PAGE_246,
  PAGE_247,
  PAGE_248,
  PAGE_249,
  PAGE_250,
  PAGE_251,
  PAGE_252,
  PAGE_253,
  PAGE_254,
  PAGE_255,
  PAGE_256,
  PAGE_257,
  PAGE_258,
  PAGE_259,
  PAGE_260,
  PAGE_261,
  PAGE_262,
  PAGE_263,
  PAGE_264,
  PAGE_265,
  PAGE_266,
  PAGE_267,
  PAGE_268,
  PAGE_269,
  PAGE_270,
  PAGE_271,
  PAGE_272,
  PAGE_273,
  PAGE_274,
  PAGE_275,
  PAGE_276,
  PAGE_277,
  PAGE_278,
  PAGE_279,
  PAGE_280,
  PAGE_281,
  PAGE_282,
  PAGE_283,
  PAGE_284,
  PAGE_285,
  PAGE_286,
  PAGE_287,
  PAGE_288,
  PAGE_289,
  PAGE_290,
  PAGE_291,
  PAGE_292,
  PAGE_293,
  PAGE_294,
  PAGE_295,
  PAGE_296,
  PAGE_297,
  PAGE_298,
  PAGE_299,
  PAGE_300,
  PAGE_301,
  PAGE_302,
  PAGE_303,
  PAGE_304,
  PAGE_305,
  PAGE_306,
  PAGE_307,
  PAGE_308,
  PAGE_309,
  PAGE_310,
  PAGE_311,
  PAGE_312,
  PAGE_313,
  PAGE_314,
  PAGE_315,
  PAGE_316,
  PAGE_317,
  PAGE_318,
  PAGE_319,
  PAGE_320,
  PAGE_321,
  PAGE_322,
  PAGE_323,
  PAGE_324,
  PAGE_325,
  PAGE_326,
  PAGE_327,
  PAGE_328,
  PAGE_329,
  PAGE_330,
  PAGE_331,
  PAGE_332,
  PAGE_333,
  PAGE_334,
  PAGE_335,
  PAGE_336,
  PAGE_337,
  PAGE_338,
  PAGE_339,
  PAGE_340,
  PAGE_341,
  PAGE_342,
  PAGE_343,
  PAGE_344,
  PAGE_345,
  PAGE_346,
  PAGE_347,
  PAGE_348,
  PAGE_349,
  PAGE_350,
  PAGE_351,
  PAGE_352,
  PAGE_353,
  PAGE_354,
  PAGE_355,
  PAGE_356,
  PAGE_357,
  PAGE_358,
  PAGE_359,
  PAGE_360,
  PAGE_361,
  PAGE_362,
  PAGE_363,
  PAGE_364,
  PAGE_365,
  PAGE_366,
  PAGE_367,
  PAGE_368,
  PAGE_369,
  PAGE_370,
  PAGE_371,
  PAGE_372,
  PAGE_373,
  PAGE_374,
  PAGE_375,
  PAGE_376,
  PAGE_377,
  PAGE_378,
  PAGE_379,
  PAGE_380,
  PAGE_381,
  PAGE_382,
  PAGE_383,
  PAGE_384,
  PAGE_385,
  PAGE_386,
  PAGE_387,
  PAGE_388,
  PAGE_389,
  PAGE_390,
  PAGE_391,
  PAGE_392,
  PAGE_393,
  PAGE_394,
  PAGE_395,
  PAGE_396,
  PAGE_397,
  PAGE_398,
  PAGE_399,
  PAGE_400,
  PAGE_401,
  PAGE_402,
  PAGE_403,
  PAGE_404,
  PAGE_405,
  PAGE_406,
  PAGE_407,
  PAGE_408,
  PAGE_409,
  PAGE_410,
  PAGE_411,
  PAGE_412,
  PAGE_413,
  PAGE_414,
  PAGE_415,
  PAGE_416,
  PAGE_417,
  PAGE_418,
  PAGE_419,
  PAGE_420,
  PAGE_421,
  PAGE_422,
  PAGE_423,
  PAGE_424,
  PAGE_425,
  PAGE_426,
  PAGE_427,
  PAGE_428,
  PAGE_429,
  PAGE_430,
  PAGE_431,
  PAGE_432,
  PAGE_433,
  PAGE_434,
  PAGE_435,
  PAGE_436,
  PAGE_437,
  PAGE_438,
  PAGE_439,
  PAGE_440,
  PAGE_441,
  PAGE_442,
  PAGE_443,
  PAGE_444,
  PAGE_445,
  PAGE_446,
  PAGE_447,
  PAGE_448,
  PAGE_449,
  PAGE_450,
  PAGE_451,
  PAGE_452,
  PAGE_453,
  PAGE_454,
  PAGE_455,
  PAGE_456,
  PAGE_457,
  PAGE_458,
  PAGE_459,
  PAGE_460,
  PAGE_461,
  PAGE_462,
  PAGE_463,
  PAGE_464,
  PAGE_465,
  PAGE_466,
  PAGE_467,
  PAGE_468,
  PAGE_469,
  PAGE_470,
  PAGE_471,
  PAGE_472,
  PAGE_473,
  PAGE_474,
  PAGE_475,
  PAGE_476,
  PAGE_477,
  PAGE_478,
  PAGE_479,
  PAGE_480,
  PAGE_481,
  PAGE_482,
  PAGE_483,
  PAGE_484,
  PAGE_485,
  PAGE_486,
  PAGE_487,
  PAGE_488,
  PAGE_489,
  PAGE_490,
  PAGE_491,
  PAGE_492,
  PAGE_493,
  PAGE_494,
  PAGE_495,
  PAGE_496,
  PAGE_497,
  PAGE_498,
  PAGE_499,
  PAGE_500,
  PAGE_501,
  PAGE_502,
  PAGE_503,
  PAGE_504,
  PAGE_505,
  PAGE_506,
  PAGE_507,
  PAGE_508,
  PAGE_509,
  PAGE_510,
  PAGE_511,
  PAGE_512,
  PAGE_513,
  PAGE_514,
  PAGE_515,
  PAGE_516,
  PAGE_517,
  PAGE_518,
  PAGE_519,
  PAGE_520,
  PAGE_521,
  PAGE_522,
  PAGE_523,
  PAGE_524,
  PAGE_525,
  PAGE_526,
  PAGE_527,
  PAGE_528,
  PAGE_529,
  PAGE_530,
  PAGE_531,
  PAGE_532,
  PAGE_533,
  PAGE_534,
  PAGE_535,
  PAGE_536,
  PAGE_537,
  PAGE_538,
  PAGE_539,
  PAGE_540,
  PAGE_541,
  PAGE_542,
  PAGE_543,
  PAGE_544,
  PAGE_545,
  PAGE_546,
  PAGE_547,
  PAGE_548,
  PAGE_549,
  PAGE_550,
  PAGE_551,
  PAGE_552,
  PAGE_553,
  PAGE_554,
  PAGE_555,
  PAGE_556,
  PAGE_557,
  PAGE_558,
  PAGE_559,
  PAGE_560,
  PAGE_561,
  PAGE_562,
  PAGE_563,
  PAGE_564,
  PAGE_565,
  PAGE_566,
  PAGE_567,
  PAGE_568,
  PAGE_569,
  PAGE_570,
  PAGE_571,
  PAGE_572,
  PAGE_573,
  PAGE_574,
  PAGE_575,
  PAGE_576,
  PAGE_577,
  PAGE_578,
  PAGE_579,
  PAGE_580,
  PAGE_581,
  PAGE_582,
  PAGE_583,
  PAGE_584,
  PAGE_585,
  PAGE_586,
  PAGE_587,
  PAGE_588,
  PAGE_589,
  PAGE_590,
  PAGE_591,
  PAGE_592,
  PAGE_593,
  PAGE_594,
  PAGE_595,
  PAGE_596,
  PAGE_597,
  PAGE_598,
  PAGE_599,
  PAGE_600,
  PAGE_601,
  PAGE_602,
  PAGE_603,
  PAGE_604,
  PAGE_605,
  PAGE_606,
  PAGE_607,
  PAGE_608,
  PAGE_609,
  PAGE_610,
  PAGE_611,
  PAGE_612,
  PAGE_613,
  PAGE_614,
  PAGE_615,
  PAGE_616,
  PAGE_617,
  PAGE_618,
  PAGE_619,
  PAGE_620,
  PAGE_621,
  PAGE_622,
  PAGE_623,
  PAGE_624,
  PAGE_625,
  PAGE_626,
  PAGE_627,
  PAGE_628,
  PAGE_629,
  PAGE_630,
  PAGE_631,
  PAGE_632,
  PAGE_633,
  PAGE_634,
  PAGE_635,
  PAGE_636,
  PAGE_637,
  PAGE_638,
  PAGE_639,
  PAGE_640,
  PAGE_641,
  PAGE_642,
  PAGE_643,
  PAGE_644,
  PAGE_645,
  PAGE_646,
  PAGE_647,
  PAGE_648,
  PAGE_649,
  PAGE_650,
  PAGE_651,
  PAGE_652,
  PAGE_653,
  PAGE_654,
  PAGE_655,
  PAGE_656,
  PAGE_657,
  PAGE_658,
  PAGE_659,
  PAGE_660,
  PAGE_661,
  PAGE_662,
  PAGE_663,
  PAGE_664,
  PAGE_665,
  PAGE_666,
  PAGE_667,
  PAGE_668,
  PAGE_669,
  PAGE_670,
  PAGE_671,
  PAGE_672,
  PAGE_673,
  PAGE_674,
  PAGE_675,
  PAGE_676,
  PAGE_677,
  PAGE_678,
  PAGE_679,
  PAGE_680,
  PAGE_681,
  PAGE_682,
  PAGE_683,
  PAGE_684,
  PAGE_685,
  PAGE_686,
  PAGE_687,
  PAGE_688,
  PAGE_689,
  PAGE_690,
  PAGE_691,
  PAGE_692,
  PAGE_693,
  PAGE_694,
  PAGE_695,
  PAGE_696,
  PAGE_697,
  PAGE_698,
  PAGE_699,
  PAGE_700,
  PAGE_701,
  PAGE_702,
  PAGE_703,
  PAGE_704,
  PAGE_705,
  PAGE_706,
  PAGE_707,
  PAGE_708,
  PAGE_709,
  PAGE_710,
  PAGE_711,
  PAGE_712,
  PAGE_713,
  PAGE_714,
  PAGE_715,
  PAGE_716,
  PAGE_717,
  PAGE_718,
  PAGE_719,
  PAGE_720,
  PAGE_721,
  PAGE_722,
  PAGE_723,
  PAGE_724,
  PAGE_725,
  PAGE_726,
  PAGE_727,
  PAGE_728,
  PAGE_729,
  PAGE_730,
  PAGE_731,
  PAGE_732,
  PAGE_733,
  PAGE_734,
  PAGE_735,
  PAGE_736,
  PAGE_737,
  PAGE_738,
  PAGE_739,
  PAGE_740,
  PAGE_741,
  PAGE_742,
  PAGE_743,
  PAGE_744,
  PAGE_745,
  PAGE_746,
  PAGE_747,
  PAGE_748,
  PAGE_749,
  PAGE_750,
  PAGE_751,
  PAGE_752,
  PAGE_753,
  PAGE_754,
  PAGE_755,
  PAGE_756,
  PAGE_757,
  PAGE_758,
  PAGE_759,
  PAGE_760,
  PAGE_761,
  PAGE_762,
  PAGE_763,
  PAGE_764,
  PAGE_765,
  PAGE_766,
  PAGE_767,
  PAGE_768,
  PAGE_769,
  PAGE_770,
  PAGE_771,
  PAGE_772,
  PAGE_773,
  PAGE_774,
  PAGE_775,
  PAGE_776,
  PAGE_777,
  PAGE_778,
  PAGE_779,
  PAGE_780,
  PAGE_781,
  PAGE_782,
  PAGE_783,
  PAGE_784,
  PAGE_785,
  PAGE_786,
  PAGE_787,
  PAGE_788,
  PAGE_789,
  PAGE_790,
  PAGE_791,
  PAGE_792,
  PAGE_793,
  PAGE_794,
  PAGE_795,
  PAGE_796,
  PAGE_797,
  PAGE_798,
  PAGE_799,
  PAGE_800,
  PAGE_801,
  PAGE_802,
  PAGE_803,
  PAGE_804,
  PAGE_805,
  PAGE_806,
  PAGE_807,
  PAGE_808,
  PAGE_809,
  PAGE_810,
  PAGE_811,
  PAGE_812,
  PAGE_813,
  PAGE_814,
  PAGE_815,
  PAGE_816,
  PAGE_817,
  PAGE_818,
  PAGE_819,
  PAGE_820,
  PAGE_821,
  PAGE_822,
  PAGE_823,
  PAGE_824,
  PAGE_825,
  PAGE_826,
  PAGE_827,
  PAGE_828,
  PAGE_829,
  PAGE_830,
  PAGE_831,
  PAGE_832,
  PAGE_833,
  PAGE_834,
  PAGE_835,
  PAGE_836,
  PAGE_837,
  PAGE_838,
  PAGE_839,
  PAGE_840,
  PAGE_841,
  PAGE_842,
  PAGE_843,
  PAGE_844,
  PAGE_845,
  PAGE_846,
  PAGE_847,
  PAGE_848,
  PAGE_849,
  PAGE_850,
  PAGE_851,
  PAGE_852,
  PAGE_853,
  PAGE_854,
  PAGE_855,
  PAGE_856,
  PAGE_857,
  PAGE_858,
  PAGE_859,
  PAGE_860,
  PAGE_861,
  PAGE_862,
  PAGE_863,
  PAGE_864,
  PAGE_865,
  PAGE_866,
  PAGE_867,
  PAGE_868,
  PAGE_869,
  PAGE_870,
  PAGE_871,
  PAGE_872,
  PAGE_873,
  PAGE_874,
  PAGE_875,
  PAGE_876,
  PAGE_877,
  ...REST_PAGES.filter((p) => p.printed > 877),
  ...BACK_PAGES,
]);

/** Letzte vollständig gesetzte Inhaltseite. */
export const LAST_TRANSCRIBED = 877;

export const CITATION =
  "Der Große Brockhaus. Handbuch des Wissens in zwanzig Bänden. Fünfzehnte, völlig neubearbeitete Auflage von Brockhaus’ Konversations-Lexikon. Zweiter Band Aju–Bla. F. A. Brockhaus, Leipzig 1929, S. 1–5.";

export const SOURCE_NOTE =
  "Vorlage: Scan-Seiten der Digitalisate (Internet Archive, Signatur dergrossebrockha02leip). Fraktur durch Antiqua ersetzt; langes ſ → s; Orthographie, Abbreviaturen, Verweiszeichen (→) der Ausgabe 1929 beibehalten. Abbildungen: koordinatenbasierte Trennung (Caption-Anker, Maske A Brotschrift minus Grafikfläche).";

export const PLATES = platesFromPages(PAGES);

export const FRAKTUR_MAP = [
  { fraktur: "ſ", antiqua: "s", note: "langes s; nie am Wortende" },
  { fraktur: "ß", antiqua: "ß", note: "scharfes s beibehalten, nicht zu ss" },
  { fraktur: "ſt / ſch", antiqua: "st / sch", note: "Ligatur aufgelöst" },
  { fraktur: "ck / tz / ch", antiqua: "ck / tz / ch", note: "Ligatur aufgelöst, Graphem gleich" },
  { fraktur: "ꝛ", antiqua: "r", note: "rundes r nach Bogenbuchstaben" },
  { fraktur: "ü / ö / ä", antiqua: "ü / ö / ä", note: "Umlautpunkte, nicht ue/oe/ae" },
  { fraktur: "→", antiqua: "→", note: "Verweiszeichen der Ausgabe 1929" },
  { fraktur: "J / I", antiqua: "J / I", note: "Versalien nach Lemma der Vorlage" },
];

export const LEMMATA: { name: string; page: number }[] = [
  { name: "Asunción", page: 0 },
  { name: "Asung", page: 0 },
  { name: "Asur", page: 0 },
  { name: "Asura", page: 0 },
  { name: "Asurbanipal", page: 0 },
  { name: "Asurnasirpal II.", page: 0 },
  { name: "Asurol", page: 1 },
  { name: "Asus", page: 1 },
  { name: "Aswattha", page: 1 },
  { name: "Aswin", page: 1 },
  { name: "Aswad", page: 1 },
  { name: "Aswan", page: 1 },
  { name: "Asyl", page: 1 },
  { name: "Asylrecht", page: 1 },
  { name: "Asymmetrie", page: 1 },
  { name: "Asymmetrisches Kohlenstoffatom", page: 2 },
  { name: "Asymptote", page: 2 },
  { name: "Asynchron", page: 2 },
  { name: "Asyndeton", page: 2 },
  { name: "Asynergia", page: 2 },
  { name: "Asyntaktisch", page: 2 },
  { name: "Asyut", page: 2 },
  { name: "Atacamit", page: 2 },
  { name: "Atacama", page: 2 },
  { name: "Atahualpa", page: 2 },
  { name: "Atalante", page: 2 },
  { name: "Atalantekanal", page: 2 },
  { name: "Ataman", page: 3 },
  { name: "Ataraxie", page: 3 },
  { name: "Atargatis", page: 3 },
  { name: "Atavismus", page: 3 },
  { name: "Ataxie", page: 3 },
  { name: "Atbara", page: 3 },
  { name: "Atchison", page: 3 },
  { name: "Ate", page: 3 },
  { name: "Atelier", page: 3 },
  { name: "Atellanen", page: 3 },
  { name: "Atem", page: 3 },
  { name: "Atemgeräusch", page: 3 },
  { name: "Atemgymnastik", page: 4 },
  { name: "Atemwurzeln", page: 4 },
  { name: "Atemzentrum", page: 4 },
  { name: "Aeterni Patris", page: 4 },
  { name: "Aeternitas", page: 5 },
  { name: "Ath", page: 5 },
  { name: "Athabasca", page: 5 },
  { name: "Athalia", page: 5 },
  { name: "Athanasius", page: 5 },
  { name: "Athapasken", page: 5 },
  { name: "Atharwaweda", page: 6 },
  { name: "Atheismus", page: 6 },
  { name: "Athen", page: 6 },
  { name: "Athena", page: 9 },
  { name: "Athenäum", page: 10 },
  { name: "Äther", page: 10 },
  { name: "Ätherische Öle", page: 11 },
  { name: "Ätherwellenmusik", page: 12 },
  { name: "Äthiopien", page: 12 },
  { name: "Äthiopische Schrift", page: 13 },
  { name: "Athletik", page: 14 },
  { name: "Athos", page: 14 },
  { name: "Äthylen", page: 15 },
  { name: "Atjeh", page: 16 },
  { name: "Atlanta", page: 17 },
  { name: "Atlantis", page: 17 },
  { name: "Atlantischer Ozean", page: 17 },
  { name: "Atlas", page: 20 },
  { name: "Atlasgebirge", page: 21 },
  { name: "Atlasspinner", page: 21 },
  { name: "Atman", page: 21 },
  { name: "Atmosphäre", page: 22 },
  { name: "Atmung", page: 25 },
  { name: "Ätna", page: 29 },
  { name: "Ätolien", page: 29 },
  { name: "Atom", page: 30 },
  { name: "Atombau", page: 30 },
  { name: "Atomgewicht", page: 32 },
  { name: "Atomtheorie", page: 33 },
  { name: "Atonal", page: 34 },
  { name: "Atreus", page: 35 },
  { name: "Atrium", page: 35 },
  { name: "Atropin", page: 36 },
  { name: "Attalos", page: 37 },
  { name: "Attentat", page: 38 },
  { name: "Attersee", page: 38 },
  { name: "Attika", page: 39 },
  { name: "Attila", page: 40 },
  { name: "Attis", page: 40 },
  { name: "Attizismus", page: 41 },
  { name: "Ätzen", page: 42 },
  { name: "Auber", page: 44 },
  { name: "Aubigné", page: 44 },
  { name: "Aucassin und Nicolette", page: 45 },
  { name: "Auckland", page: 46 },
  { name: "Aude", page: 46 },
  { name: "Audubon", page: 48 },
  { name: "Auer von Welsbach", page: 48 },
  { name: "Auerbach, Berthold", page: 49 },
  { name: "Auerhuhn", page: 50 },
  { name: "Auersperg", page: 50 },
  { name: "Auerstedt", page: 51 },
  { name: "Auerswald", page: 51 },
  { name: "Aufbereitung", page: 52 },
  { name: "Auferstehung Christi", page: 54 },
  { name: "Auffenberg", page: 55 },
  { name: "Aufforstung", page: 55 },
  { name: "Aufgebot", page: 56 },
  { name: "Aufgußtierchen", page: 57 },
  { name: "Aufklärung", page: 58 },
  { name: "Auflage", page: 59 },
  { name: "Auflassung", page: 59 },
  { name: "Auflösung", page: 60 },
  { name: "Aufmarsch", page: 60 },
  { name: "Aufnahme", page: 60 },
  { name: "Aufrechnung", page: 61 },
  { name: "Aufruhr", page: 62 },
  { name: "Aufsichtsrat", page: 63 },
  { name: "Auftrag", page: 64 },
  { name: "Auftrieb", page: 65 },
  { name: "Aufwertung", page: 66 },
  { name: "Aufzug", page: 68 },
  { name: "Auge", page: 70 },
  { name: "Augendiagnose", page: 73 },
  { name: "Augener", page: 73 },
  { name: "Augenfadenwurm", page: 73 },
  { name: "Augenfalter", page: 73 },
  { name: "Augenheilkunde", page: 74 },
  { name: "Augenkrankheiten", page: 74 },
  { name: "Augenpflege", page: 75 },
  { name: "Augenschein", page: 75 },
  { name: "Augenspiegel", page: 75 },
  { name: "Augenspinner", page: 76 },
  { name: "Augentripper", page: 76 },
  { name: "Augentrost", page: 77 },
  { name: "Augenverletzungen", page: 77 },
  { name: "Augenwässer", page: 77 },
  { name: "Augenzittern", page: 78 },
  { name: "Augereau", page: 78 },
  { name: "Augias", page: 78 },
  { name: "Augier", page: 78 },
  { name: "Augila", page: 78 },
  { name: "Augit", page: 78 },
  { name: "Augment", page: 79 },
  { name: "Augsburg", page: 79 },
  { name: "Augsburgische Konfession", page: 81 },
  { name: "Augspurg", page: 81 },
  { name: "August", page: 82 },
  { name: "August der Starke", page: 83 },
  { name: "Augusta", page: 84 },
  { name: "Auguste Viktoria", page: 85 },
  { name: "Augustenburger Linie", page: 85 },
  { name: "Augustiner", page: 86 },
  { name: "Augustinus", page: 86 },
  { name: "Augustus", page: 87 },
  { name: "Auktion", page: 88 },
  { name: "Aulard", page: 89 },
  { name: "Aulos", page: 90 },
  { name: "Aura", page: 91 },
  { name: "Aurangzeb", page: 91 },
  { name: "Aurelian", page: 91 },
  { name: "Aurich", page: 92 },
  { name: "Aurikel", page: 93 },
  { name: "Ausbeute", page: 93 },
  { name: "Auschwitz", page: 94 },
  { name: "Ausdehnung", page: 95 },
  { name: "Ausdruck", page: 96 },
  { name: "Ausfuhr", page: 98 },
  { name: "Ausfuhrprämien", page: 98 },
  { name: "Ausgabe", page: 100 },
  { name: "Ausgleich", page: 101 },
  { name: "Ausgrabungen", page: 102 },
  { name: "Ausland", page: 105 },
  { name: "Ausländer", page: 106 },
  { name: "Auslieferung", page: 108 },
  { name: "Ausnahmezustand", page: 109 },
  { name: "Aussatz", page: 110 },
  { name: "Ausschuß", page: 112 },
  { name: "Außenhandel", page: 113 },
  { name: "Aussig", page: 116 },
  { name: "Aussperrung", page: 117 },
  { name: "Ausstellung", page: 118 },
  { name: "Aussterben", page: 120 },
  { name: "Auster", page: 121 },
  { name: "Austerlitz", page: 122 },
  { name: "Australien", page: 123 },
  { name: "Australien (Klima)", page: 125 },
  { name: "Australien (Entdeckung)", page: 129 },
  { name: "Australier", page: 131 },
  { name: "Australische Literatur", page: 133 },
  { name: "Austritt aus der Kirche", page: 134 },
  { name: "Ausverkauf", page: 135 },
  { name: "Auswanderung", page: 135 },
  { name: "Auswärtiges Amt", page: 141 },
  { name: "Autarkie", page: 143 },
  { name: "Autodafé", page: 144 },
  { name: "Autograph", page: 145 },
  { name: "Automat", page: 147 },
  { name: "Autonomie", page: 149 },
  { name: "Autostraßen", page: 150 },
  { name: "Autosuggestion", page: 151 },
  { name: "Autotypie", page: 151 },
  { name: "Auvergne", page: 152 },
  { name: "Avenarius", page: 156 },
  { name: "Averroismus", page: 157 },
  { name: "Avignon", page: 159 },
  { name: "Ávila", page: 160 },
  { name: "Avogadro", page: 161 },
  { name: "Awaren", page: 162 },
  { name: "Awesta", page: 162 },
  { name: "Ayacucho", page: 164 },
  { name: "Ayr", page: 165 },
  { name: "Azalea", page: 166 },
  { name: "Azeton", page: 167 },
  { name: "Azetylen", page: 167 },
  { name: "Azincourt", page: 169 },
  { name: "Azofarbstoffe", page: 170 },
  { name: "Azoren", page: 171 },
  { name: "Azteken", page: 172 },
  { name: "Azulejos", page: 173 },
  { name: "B", page: 173 },
  { name: "Baader", page: 174 },
  { name: "Baal", page: 174 },
  { name: "Baalbek", page: 175 },
  { name: "Babeuf", page: 177 },
  { name: "Babylon", page: 178 },
  { name: "Bābur", page: 178 },
  { name: "Babylonien", page: 179 },
  { name: "Babylonische Kunst", page: 181 },
  { name: "Babylonische Literatur", page: 184 },
  { name: "Babylonischer Turm", page: 184 },
  { name: "Babylonisches Exil", page: 185 },
  { name: "Bach", page: 186 },
  { name: "Johann Sebastian Bach", page: 187 },
  { name: "Philipp Emanuel Bach", page: 188 },
  { name: "Bacharach", page: 189 },
  { name: "Bachofen", page: 190 },
  { name: "Bachstelze", page: 190 },
  { name: "Bäcker", page: 192 },
  { name: "Backnang", page: 193 },
  { name: "Backsteinbau", page: 193 },
  { name: "Bacon", page: 195 },
  { name: "Bad", page: 196 },
  { name: "Badeanstalt", page: 201 },
  { name: "Badachschan", page: 201 },
  { name: "Baedeker", page: 204 },
  { name: "Badekur", page: 204 },
  { name: "Baden", page: 204 },
  { name: "Baden-Baden", page: 211 },
  { name: "Badeni", page: 211 },
  { name: "Baden-Powell", page: 211 },
  { name: "Badenweiler", page: 212 },
  { name: "Badezimmer", page: 212 },
  { name: "Badge", page: 213 },
  { name: "Badoglio", page: 213 },
  { name: "Baffin", page: 214 },
  { name: "Bagehot", page: 214 },
  { name: "Bagamoyo", page: 214 },
  { name: "Bagger", page: 215 },
  { name: "Baggesen", page: 218 },
  { name: "Baghdâd", page: 218 },
  { name: "Baghdâdbahn", page: 219 },
  { name: "Bagration", page: 220 },
  { name: "Bahama-Inseln", page: 221 },
  { name: "Bahia", page: 221 },
  { name: "Bahn", page: 222 },
  { name: "Bahneinheit", page: 223 },
  { name: "Bahnarzt", page: 223 },
  { name: "Bahnhöfe", page: 223 },
  { name: "Bahnhofsmission", page: 229 },
  { name: "Bahnmeister", page: 229 },
  { name: "Bahnpolizei", page: 229 },
  { name: "Bahnsteig", page: 230 },
  { name: "Hermann Bahr", page: 231 },
  { name: "Georg Bähr", page: 231 },
  { name: "Bahreininseln", page: 231 },
  { name: "Bahrgericht", page: 232 },
  { name: "Baiersbronn", page: 232 },
  { name: "Baikalsee", page: 233 },
  { name: "Bailli", page: 234 },
  { name: "Alexander Bain", page: 234 },
  { name: "Baja California", page: 235 },
  { name: "Bajadere", page: 236 },
  { name: "Bajazîd", page: 236 },
  { name: "Bajonett", page: 236 },
  { name: "Bajuwaren", page: 237 },
  { name: "Bakelit", page: 237 },
  { name: "Samuel Baker", page: 238 },
  { name: "Baki", page: 238 },
  { name: "Baccalaureus", page: 239 },
  { name: "Bakst", page: 239 },
  { name: "Bakterien", page: 239 },
  { name: "Bakteriologie", page: 244 },
  { name: "Baktrien", page: 245 },
  { name: "Baku", page: 245 },
  { name: "Bakunin", page: 246 },
  { name: "Balaklawa", page: 247 },
  { name: "Balalaika", page: 247 },
  { name: "Balata", page: 248 },
  { name: "Balboa", page: 249 },
  { name: "Balkh", page: 249 },
  { name: "Baldachin", page: 250 },
  { name: "Balchaschsee", page: 250 },
  { name: "Baldr", page: 251 },
  { name: "Baldrian", page: 251 },
  { name: "Hans Baldung", page: 252 },
  { name: "Stanley Baldwin", page: 253 },
  { name: "Balearen", page: 253 },
  { name: "Arthur Balfour", page: 254 },
  { name: "Bali", page: 255 },
  { name: "Balkan", page: 255 },
  { name: "Balkanhalbinsel", page: 256 },
  { name: "Balkankriege", page: 257 },
  { name: "Balken", page: 262 },
  { name: "Balkon", page: 263 },
  { name: "Ballade", page: 264 },
  { name: "Ballast", page: 265 },
  { name: "Ballenstedt", page: 266 },
  { name: "Ballett", page: 266 },
  { name: "Albert Ballin", page: 267 },
  { name: "Ballistik", page: 267 },
  { name: "Ballon", page: 268 },
  { name: "Ballspiele", page: 270 },
  { name: "Balmer-Serie", page: 271 },
  { name: "Balneologie", page: 271 },
  { name: "Balsam", page: 272 },
  { name: "Balsamine", page: 272 },
  { name: "Baltikum", page: 273 },
  { name: "Baltimore", page: 274 },
  { name: "Baltischer Landrücken", page: 274 },
  { name: "Baltistan", page: 275 },
  { name: "Balz", page: 276 },
  { name: "Honoré de Balzac", page: 276 },
  { name: "Bamberg", page: 277 },
  { name: "Ludwig Bamberger", page: 279 },
  { name: "Bambus", page: 280 },
  { name: "Bamum", page: 281 },
  { name: "Banane", page: 282 },
  { name: "Banat", page: 283 },
  { name: "George Bancroft", page: 283 },
  { name: "Band", page: 283 },
  { name: "Bandagist", page: 285 },
  { name: "Ernst von Bandel", page: 286 },
  { name: "Banditen", page: 287 },
  { name: "Bandweberei", page: 288 },
  { name: "Bandwürmer", page: 289 },
  { name: "Johan Banér", page: 290 },
  { name: "Hermann Bang", page: 291 },
  { name: "Bangalore", page: 291 },
  { name: "Bangkok", page: 292 },
  { name: "Bangor", page: 293 },
  { name: "Banja Luka", page: 293 },
  { name: "Banjo", page: 293 },
  { name: "Bank", page: 294 },
  { name: "Bankakte", page: 294 },
  { name: "Banken", page: 296 },
  { name: "Bankgebäude", page: 299 },
  { name: "Banknoten", page: 300 },
  { name: "Bankrott", page: 301 },
  { name: "Joseph Banks", page: 301 },
  { name: "Bank von England", page: 302 },
  { name: "Bank von Frankreich", page: 302 },
  { name: "Bann", page: 303 },
  { name: "Banner", page: 303 },
  { name: "Bantam", page: 304 },
  { name: "Frederick Banting", page: 305 },
  { name: "Bantusprachen", page: 305 },
  { name: "Baptisten", page: 306 },
  { name: "Baptisterium", page: 307 },
  { name: "Bar", page: 307 },
  { name: "Bar-le-Duc", page: 308 },
  { name: "Karl Ernst von Baer", page: 308 },
  { name: "Bär", page: 308 },
  { name: "Baracke", page: 309 },
  { name: "Robert Bárány", page: 310 },
  { name: "Barbados", page: 311 },
  { name: "Barbara", page: 311 },
  { name: "Barberini", page: 312 },
  { name: "Barbey d'Aurevilly", page: 313 },
  { name: "Barbizon", page: 313 },
  { name: "Henri Barbusse", page: 314 },
  { name: "Barcelona", page: 314 },
  { name: "Barchent", page: 316 },
  { name: "Barclay de Tolly", page: 317 },
  { name: "Barden", page: 317 },
  { name: "Bardenberg", page: 320 },
  { name: "Bardowick", page: 320 },
  { name: "Bären", page: 321 },
  { name: "Willem Barentsz", page: 322 },
  { name: "Bärenfüße", page: 322 },
  { name: "Bäreninsel", page: 323 },
  { name: "Bärenspinner", page: 323 },
  { name: "Willem Barents", page: 324 },
  { name: "Barett", page: 324 },
  { name: "Bari", page: 326 },
  { name: "Bariton", page: 327 },
  { name: "Barium", page: 327 },
  { name: "Barlaam und Josaphat", page: 330 },
  { name: "Ernst Barlach", page: 330 },
  { name: "Barletta", page: 331 },
  { name: "Barlowsche Krankheit", page: 331 },
  { name: "Barmat-Prozeß", page: 331 },
  { name: "Barmen", page: 331 },
  { name: "Barmherzige Brüder", page: 336 },
  { name: "Barmherzige Schwestern", page: 337 },
  { name: "Barnabas", page: 337 },
  { name: "Barnaul", page: 337 },
  { name: "Ludwig Barnay", page: 338 },
  { name: "P. T. Barnum", page: 339 },
  { name: "Barock", page: 339 },
  { name: "Tafel Barock", page: 340 },
  { name: "Barockdichtung", page: 346 },
  { name: "Baroda", page: 346 },
  { name: "Pío Baroja", page: 346 },
  { name: "Barometer", page: 347 },
  { name: "Baron", page: 348 },
  { name: "Barras", page: 349 },
  { name: "Barre", page: 350 },
  { name: "Maurice Barrès", page: 351 },
  { name: "J. M. Barrie", page: 352 },
  { name: "Great Barrier Reef", page: 352 },
  { name: "Barsch", page: 353 },
  { name: "Bart", page: 354 },
  { name: "Jean Bart", page: 355 },
  { name: "Adolf Bartels", page: 356 },
  { name: "Bartfeld", page: 356 },
  { name: "Bartgeier", page: 357 },
  { name: "Heinrich Barth", page: 357 },
  { name: "Karl Barth", page: 358 },
  { name: "Bartholdi", page: 359 },
  { name: "Bartholomäusnacht", page: 360 },
  { name: "Barthou", page: 360 },
  { name: "Bärtierchen", page: 361 },
  { name: "Béla Bartók", page: 361 },
  { name: "Fra Bartolommeo", page: 361 },
  { name: "Bartolus", page: 362 },
  { name: "Karl Bartsch", page: 363 },
  { name: "Baruch", page: 363 },
  { name: "Barye", page: 364 },
  { name: "Basalt", page: 365 },
  { name: "Basar", page: 366 },
  { name: "Baschkiren", page: 366 },
  { name: "Basedow", page: 367 },
  { name: "Basedowsche Krankheit", page: 367 },
  { name: "Basel", page: 367 },
  { name: "Baseler Frieden", page: 371 },
  { name: "Baseler Konzil", page: 371 },
  { name: "Basen", page: 371 },
  { name: "Basilika", page: 372 },
  { name: "Basilicata", page: 374 },
  { name: "Basilius der Große", page: 375 },
  { name: "Basken", page: 376 },
  { name: "Baskische Sprache", page: 377 },
  { name: "Basra", page: 378 },
  { name: "Baß", page: 378 },
  { name: "Bassermann", page: 379 },
  { name: "Bast", page: 382 },
  { name: "Bastard", page: 382 },
  { name: "Bastian, Adolf", page: 384 },
  { name: "Bastille", page: 385 },
  { name: "Basutoland", page: 386 },
  { name: "Batak", page: 386 },
  { name: "Batavia", page: 388 },
  { name: "Bath", page: 389 },
  { name: "Báthory", page: 390 },
  { name: "Batik", page: 391 },
  { name: "Battenberg", page: 393 },
  { name: "Batthyány", page: 393 },
  { name: "Batu Chan", page: 394 },
  { name: "Batum", page: 394 },
  { name: "Bauch", page: 396 },
  { name: "Baudelaire", page: 398 },
  { name: "Bauer", page: 400 },
  { name: "Bauernbefreiung", page: 403 },
  { name: "Bauernfeld", page: 404 },
  { name: "Bauernhaus", page: 405 },
  { name: "Bauernkrieg", page: 410 },
  { name: "Bauernlegen", page: 410 },
  { name: "Bauernvereine", page: 411 },
  { name: "Bauhaus", page: 413 },
  { name: "Bauhütte", page: 414 },
  { name: "Baukeramik", page: 415 },
  { name: "Baukunst", page: 418 },
  { name: "Karl Friedrich Schinkel", page: 424 },
  { name: "Jugendstil", page: 425 },
  { name: "Baum", page: 426 },
  { name: "Gertrud Bäumer", page: 428 },
  { name: "Baumé-Skala", page: 428 },
  { name: "Alexander Gottlieb Baumgarten", page: 428 },
  { name: "Baumgrenze", page: 429 },
  { name: "Baumkult", page: 430 },
  { name: "Baumläufer", page: 431 },
  { name: "Baumsarg", page: 431 },
  { name: "Baumschule", page: 431 },
  { name: "Baumwachs", page: 434 },
  { name: "Baumwolle", page: 435 },
  { name: "Baumwollsamenöl", page: 439 },
  { name: "Baunscheidtismus", page: 440 },
  { name: "Bauopfer", page: 440 },
  { name: "Ferdinand Christian Baur", page: 440 },
  { name: "Bautzen", page: 442 },
  { name: "Bauxit", page: 444 },
  { name: "Bavaria", page: 444 },
  { name: "Bayard", page: 445 },
  { name: "Johann Bayer", page: 445 },
  { name: "Adolf von Baeyer", page: 448 },
  { name: "Bayern", page: 448 },
  { name: "Bayerische Hypotheken- und Wechsel-Bank", page: 448 },
  { name: "Wittelsbacher", page: 459 },
  { name: "Maximilian I. von Bayern", page: 459 },
  { name: "Montgelas", page: 464 },
  { name: "Ludwig I. von Bayern", page: 464 },
  { name: "Ludwig II. von Bayern", page: 465 },
  { name: "Lola Montez", page: 464 },
  { name: "Kurt Eisner", page: 466 },
  { name: "Pierre Bayle", page: 467 },
  { name: "Bayeux", page: 467 },
  { name: "Bayreuth", page: 468 },
  { name: "Bayerische Volkspartei", page: 470 },
  { name: "Bayerische Alpen", page: 470 },
  { name: "Bazaine", page: 471 },
  { name: "Beamter", page: 473 },
  { name: "Aubrey Beardsley", page: 474 },
  { name: "Béarn", page: 475 },
  { name: "Beaumarchais", page: 477 },
  { name: "Beauharnais", page: 477 },
  { name: "Beaumont und Fletcher", page: 478 },
  { name: "August Bebel", page: 480 },
  { name: "Cesare Beccaria", page: 481 },
  { name: "Bechstein", page: 483 },
  { name: "Becken", page: 485 },
  { name: "Max Wladimir Beck", page: 484 },
  { name: "Karl Heinrich Becker", page: 486 },
  { name: "Thomas Becket", page: 487 },
  { name: "Henri Becquerel", page: 489 },
  { name: "Beda Venerabilis", page: 489 },
  { name: "Joseph Bédier", page: 491 },
  { name: "Bedingung", page: 491 },
  { name: "Tafel Beeren", page: 492 },
  { name: "Tafel Beethoven", page: 494 },
  { name: "Harriet Beecher-Stowe", page: 497 },
  { name: "Beelzebub", page: 497 },
  { name: "Ludwig van Beethoven", page: 499 },
  { name: "Beeskow", page: 499 },
  { name: "Tafel Beethoven II", page: 501 },
  { name: "Befähigungsnachweis", page: 503 },
  { name: "Befestigung", page: 504 },
  { name: "Befestigungskunst", page: 505 },
  { name: "Tafel Befruchtung", page: 506 },
  { name: "Befruchtung", page: 508 },
  { name: "Begabtenauslese", page: 509 },
  { name: "Reinhold Begas", page: 510 },
  { name: "Beginen", page: 511 },
  { name: "Begnadigung", page: 512 },
  { name: "Begriff", page: 513 },
  { name: "Martin Behaim", page: 514 },
  { name: "Behörden", page: 516 },
  { name: "Peter Behrens", page: 517 },
  { name: "Emil von Behring", page: 517 },
  { name: "Beichte", page: 518 },
  { name: "Tafel Bein", page: 522 },
  { name: "Beinwell", page: 524 },
  { name: "Beira", page: 525 },
  { name: "Beirut", page: 525 },
  { name: "Beischlaf", page: 526 },
  { name: "Beize", page: 528 },
  { name: "Bekanntmachung", page: 530 },
  { name: "Bekassine", page: 530 },
  { name: "Bekenntnis", page: 531 },
  { name: "Bekleidungsgewerbe", page: 533 },
  { name: "Belagerungszustand", page: 534 },
  { name: "Belcanto", page: 535 },
  { name: "Beleidigung", page: 536 },
  { name: "Belemniten", page: 536 },
  { name: "Beleuchtung", page: 537 },
  { name: "Tafel Beleuchtung", page: 538 },
  { name: "Belfast", page: 544 },
  { name: "Belfort", page: 544 },
  { name: "Belgen", page: 545 },
  { name: "Belgien", page: 546 },
  { name: "Belgische Kunst", page: 555 },
  { name: "Belgisch-Kongo", page: 557 },
  { name: "Belgrad", page: 559 },
  { name: "Belisar", page: 560 },
  { name: "Bell", page: 561 },
  { name: "Bellini", page: 564 },
  { name: "Bellinzona", page: 565 },
  { name: "Bellman", page: 566 },
  { name: "Bellsches Gesetz", page: 567 },
  { name: "Below", page: 568 },
  { name: "Belutschistan", page: 570 },
  { name: "Belvedere", page: 571 },
  { name: "Benares", page: 572 },
  { name: "Benda", page: 573 },
  { name: "Benedek", page: 575 },
  { name: "Benedikt", page: 576 },
  { name: "Benediktiner", page: 577 },
  { name: "Beneke", page: 578 },
  { name: "Beneš", page: 579 },
  { name: "Bengalen", page: 580 },
  { name: "Bengalischer Meerbusen", page: 581 },
  { name: "Bengasi", page: 582 },
  { name: "Benin", page: 582 },
  { name: "Bennigsen", page: 584 },
  { name: "Benno", page: 585 },
  { name: "Bensheim", page: 586 },
  { name: "Bentham", page: 586 },
  { name: "Bentinck", page: 587 },
  { name: "Benue", page: 588 },
  { name: "Benz", page: 589 },
  { name: "Benzin", page: 589 },
  { name: "Benzoesäure", page: 590 },
  { name: "Beobachtung", page: 591 },
  { name: "Beowulf", page: 592 },
  { name: "Béranger", page: 592 },
  { name: "Berber", page: 593 },
  { name: "Berberitze", page: 594 },
  { name: "Berchtesgaden", page: 595 },
  { name: "Berchtold", page: 596 },
  { name: "Bereicherung", page: 596 },
  { name: "Beresina", page: 600 },
  { name: "Berg", page: 600 },
  { name: "Bergaigne", page: 601 },
  { name: "Bergakademien", page: 604 },
  { name: "Bergamo", page: 605 },
  { name: "Bergarbeiter", page: 605 },
  { name: "Bergarbeiterverbände", page: 606 },
  { name: "Bergbahnen", page: 606 },
  { name: "Bergbau", page: 607 },
  { name: "Bergbaufreiheit", page: 620 },
  { name: "Bergbehörden", page: 620 },
  { name: "Bergdamara", page: 620 },
  { name: "Bergen", page: 621 },
  { name: "Bergerac", page: 623 },
  { name: "Bergführer", page: 624 },
  { name: "Bergisch-Gladbach", page: 625 },
  { name: "Bergius", page: 626 },
  { name: "Bergkristall", page: 626 },
  { name: "Bergmann", page: 627 },
  { name: "Bergpredigt", page: 628 },
  { name: "Bergrecht", page: 628 },
  { name: "Bergsturz", page: 631 },
  { name: "Beriberi", page: 632 },
  { name: "Bering", page: 633 },
  { name: "Berkeley", page: 634 },
  { name: "Berkshire", page: 635 },
  { name: "Berleburg", page: 635 },
  { name: "Berlin", page: 636 },
  { name: "Berliner Börsen-Zeitung", page: 646 },
  { name: "Berliner Kongreß", page: 646 },
  { name: "Berliner Porzellan", page: 647 },
  { name: "Berliner Tageblatt", page: 647 },
  { name: "Berliner Weißbier", page: 647 },
  { name: "Berlioz", page: 647 },
  { name: "Berlitzschulen", page: 648 },
  { name: "Bermudainseln", page: 648 },
  { name: "Bern", page: 649 },
  { name: "Bernard", page: 652 },
  { name: "Bernau", page: 653 },
  { name: "Bernays", page: 654 },
  { name: "Bernburg", page: 654 },
  { name: "Berncastel-Cues", page: 654 },
  { name: "Berneck", page: 654 },
  { name: "Berner Oberland", page: 655 },
  { name: "Berner Übereinkunft", page: 655 },
  { name: "Bernhard", page: 656 },
  { name: "Bernhard von Clairvaux", page: 657 },
  { name: "Bernhardi", page: 658 },
  { name: "Bernhardt", page: 658 },
  { name: "Bernheim", page: 658 },
  { name: "Bernini", page: 659 },
  { name: "Bernoulli", page: 660 },
  { name: "Bernstein", page: 661 },
  { name: "Bernstorff", page: 665 },
  { name: "Berlinchen", page: 671 },
  { name: "Berliner Blau", page: 671 },
  { name: "Bertolini", page: 672 },
  { name: "Berton", page: 672 },
  { name: "Bertoni", page: 672 },
  { name: "Bertrada", page: 672 },
  { name: "Bertram", page: 672 },
  { name: "Bertrand", page: 672 },
  { name: "Bertrand de Born", page: 672 },
  { name: "Bertrand-Thiel-Verfahren", page: 672 },
  { name: "Bertrand de Bar-sur-Aube", page: 673 },
  { name: "Bertrich", page: 673 },
  { name: "Bertsch", page: 673 },
  { name: "Bertuch", page: 673 },
  { name: "Beruete", page: 673 },
  { name: "Beruf", page: 673 },
  { name: "Berufen", page: 673 },
  { name: "Berufskraut", page: 673 },
  { name: "Berufsamt", page: 673 },
  { name: "Berufsanamnese", page: 673 },
  { name: "Berufsberatung", page: 674 },
  { name: "Berufseignungsforschung", page: 674 },
  { name: "Berufsfahrer", page: 674 },
  { name: "Berufsfreiheit", page: 674 },
  { name: "Berufsgeheimnis", page: 674 },
  { name: "Berufsgenossenschaften", page: 674 },
  { name: "Berufsgliederung", page: 675 },
  { name: "Berufsheer", page: 675 },
  { name: "Berufskrankheiten", page: 675 },
  { name: "Berufskunde", page: 677 },
  { name: "Berufspflichten", page: 677 },
  { name: "Berufspolitik", page: 677 },
  { name: "Berufsrichter", page: 677 },
  { name: "Berufsschule", page: 677 },
  { name: "Berufssekretariate", page: 677 },
  { name: "Berufssportmann", page: 678 },
  { name: "Berufssprachen", page: 678 },
  { name: "Berufsstände", page: 678 },
  { name: "Berufsstatistik", page: 678 },
  { name: "Berufsunfähigkeit", page: 680 },
  { name: "Berufsverbände", page: 680 },
  { name: "Berufsvereine", page: 680 },
  { name: "Berufsvertretung", page: 680 },
  { name: "Berufsvormundschaft", page: 680 },
  { name: "Berufszählung", page: 680 },
  { name: "Berufung", page: 681 },
  { name: "Beruhigende Mittel", page: 682 },
  { name: "Berührung", page: 682 },
  { name: "Berührungselektrizität", page: 682 },
  { name: "Berum", page: 682 },
  { name: "Berwick", page: 682 },
  { name: "Beryll", page: 683 },
  { name: "Beryllium", page: 683 },
  { name: "Berzelius", page: 683 },
  { name: "Berzeviczy", page: 684 },
  { name: "Bes", page: 684 },
  { name: "Besançon", page: 684 },
  { name: "Besant", page: 684 },
  { name: "Besatz", page: 685 },
  { name: "Besatzung", page: 685 },
  { name: "Besborodko", page: 685 },
  { name: "Beschäftigungsgrad", page: 685 },
  { name: "Beschäftigungsneurosen", page: 685 },
  { name: "Beschälseuche", page: 685 },
  { name: "Beschattung", page: 686 },
  { name: "Beschau", page: 686 },
  { name: "Bescheidenheit", page: 686 },
  { name: "Beschimpfung", page: 686 },
  { name: "Beschlag", page: 686 },
  { name: "Beschläge", page: 686 },
  { name: "Beschlagen", page: 687 },
  { name: "Beschlagnahme", page: 687 },
  { name: "Beschleunigung", page: 687 },
  { name: "Beschluß", page: 688 },
  { name: "Beschlußfähigkeit", page: 688 },
  { name: "Beschneiden", page: 688 },
  { name: "Beschneidung", page: 688 },
  { name: "Bescholtenheit", page: 689 },
  { name: "Beschreibung", page: 689 },
  { name: "Beschuldigter", page: 689 },
  { name: "Beschwerde", page: 689 },
  { name: "Beseler", page: 691 },
  { name: "Besenginster", page: 691 },
  { name: "Besessenheit", page: 691 },
  { name: "Besetztes Gebiet", page: 692 },
  { name: "Besetzung feindlichen Gebietes", page: 692 },
  { name: "Besigheim", page: 693 },
  { name: "Besitz", page: 693 },
  { name: "Beskiden", page: 694 },
  { name: "Beskow", page: 694 },
  { name: "Besnard", page: 694 },
  { name: "Besoldung", page: 694 },
  { name: "Bespannung", page: 695 },
  { name: "Bessarabien", page: 697 },
  { name: "Bessarion", page: 697 },
  { name: "Bessel", page: 697 },
  { name: "Bessemer", page: 698 },
  { name: "Bessemerprozeß", page: 698 },
  { name: "Bessières", page: 699 },
  { name: "Bestand", page: 699 },
  { name: "Bestechung", page: 700 },
  { name: "Besteck", page: 700 },
  { name: "Bestelmeyer", page: 700 },
  { name: "Bestens", page: 701 },
  { name: "Bestie", page: 701 },
  { name: "Bestockung", page: 701 },
  { name: "Bestuschew-Rjumin", page: 702 },
  { name: "Beta", page: 702 },
  { name: "Betastrahlen", page: 702 },
  { name: "Betel", page: 703 },
  { name: "Bethe", page: 703 },
  { name: "Bethel", page: 704 },
  { name: "Bethlehem", page: 704 },
  { name: "Bethlen", page: 705 },
  { name: "Bethmann-Hollweg", page: 705 },
  { name: "Bethsaida", page: 706 },
  { name: "Béthune", page: 706 },
  { name: "Beth Zur", page: 707 },
  { name: "Beton", page: 707 },
  { name: "Betonbau", page: 708 },
  { name: "Betrieb", page: 709 },
  { name: "Betriebsingenieur", page: 709 },
  { name: "Betriebskapital", page: 710 },
  { name: "Betriebsrat", page: 710 },
  { name: "Betriebsschutz", page: 712 },
  { name: "Betriebsstillegung", page: 713 },
  { name: "Betriebswirtschaftslehre", page: 714 },
  { name: "Betrug", page: 714 },
  { name: "Betschuanaland", page: 715 },
  { name: "Bett", page: 715 },
  { name: "Betteln", page: 717 },
  { name: "Bettelmönche", page: 717 },
  { name: "Bettwanze", page: 718 },
  { name: "Beugung", page: 719 },
  { name: "Beugungsgitter", page: 720 },
  { name: "Beuron", page: 721 },
  { name: "Beust", page: 721 },
  { name: "Beute", page: 721 },
  { name: "Beutel", page: 722 },
  { name: "Beuteltiere", page: 723 },
  { name: "Beuth", page: 723 },
  { name: "Beuthen", page: 726 },
  { name: "Bevölkerung", page: 728 },
  { name: "Bevölkerungslehre", page: 729 },
  { name: "Bewässerung", page: 731 },
  { name: "Bewegung", page: 732 },
  { name: "Bewegungsenergie", page: 735 },
  { name: "Bewegungskrieg", page: 735 },
  { name: "Beweis", page: 736 },
  { name: "Beweislast", page: 737 },
  { name: "Bewußtsein", page: 738 },
  { name: "Beyer", page: 739 },
  { name: "Beza", page: 740 },
  { name: "Béziers", page: 740 },
  { name: "Bezirk", page: 741 },
  { name: "Bezold", page: 742 },
  { name: "Bhagavadgita", page: 743 },
  { name: "Bhopal", page: 745 },
  { name: "Bhutan", page: 745 },
  { name: "Białystok", page: 746 },
  { name: "Biarritz", page: 747 },
  { name: "Bibel", page: 747 },
  { name: "Bibelgesellschaften", page: 751 },
  { name: "Bibelkonkordanz", page: 751 },
  { name: "Biber", page: 752 },
  { name: "Biberach", page: 753 },
  { name: "Biblia pauperum", page: 754 },
  { name: "Bibliographie", page: 754 },
  { name: "Bibliothek", page: 756 },
  { name: "Bibliothekar", page: 760 },
  { name: "Bibliothekslehre", page: 761 },
  { name: "Bibliothèque Nationale", page: 765 },
  { name: "Bichat", page: 766 },
  { name: "Bidassoa", page: 766 },
  { name: "Biedermeier", page: 768 },
  { name: "Biegung", page: 769 },
  { name: "Biel", page: 770 },
  { name: "Bielefeld", page: 771 },
  { name: "Bielitz", page: 772 },
  { name: "Biene", page: 775 },
  { name: "Bienenzucht", page: 779 },
  { name: "Bier", page: 782 },
  { name: "Biersteuer", page: 783 },
  { name: "Bigamie", page: 785 },
  { name: "Bihar", page: 786 },
  { name: "Bilanz", page: 788 },
  { name: "Bilbao", page: 790 },
  { name: "Bildhauerkunst", page: 794 },
  { name: "Bildnis", page: 796 },
  { name: "Bildnismalerei", page: 801 },
  { name: "Bildnisschutz", page: 801 },
  { name: "Bildtelegraphie", page: 802 },
  { name: "Bildnismalerei", page: 805 },
  { name: "Bildung", page: 807 },
  { name: "Bildwirkerei", page: 809 },
  { name: "Billard", page: 813 },
  { name: "Billroth", page: 816 },
  { name: "Bingen", page: 820 },
  { name: "Binnenschiffahrt", page: 821 },
  { name: "Biographie", page: 824 },
  { name: "Biologie", page: 826 },
  { name: "Birke", page: 828 },
  { name: "Birmanen", page: 831 },
  { name: "Birne", page: 832 },
  { name: "Bischof", page: 835 },
  { name: "Bismarck", page: 840 },
  { name: "Bismarckarchipel", page: 846 },
  { name: "Bison", page: 847 },
  { name: "Bithynien", page: 848 },
  { name: "Bitumen", page: 851 },
  { name: "Bizet", page: 851 },
  { name: "Björnson", page: 852 },
  { name: "Blackburn", page: 854 },
  { name: "Blake", page: 856 },
  { name: "Blanc", page: 856 },
  { name: "Blankenburg", page: 858 },
  { name: "Blankvers", page: 859 },
  { name: "Blasco Ibáñez", page: 860 },
  { name: "Blase", page: 861 },
  { name: "Blasius", page: 863 },
  { name: "Blatt", page: 866 },
  { name: "Blattdürre", page: 867 },
  { name: "Blattgold", page: 869 },
  { name: "Blattpflanzen", page: 870 },
  { name: "Blau", page: 872 },
  { name: "Blaubeuren", page: 873 },
  { name: "Blausäure", page: 876 },
  { name: "Blavatsky", page: 877 },
];

export function pagePlainText(page: EncPage): string {
  const strip = (html: string) =>
    html
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&nbsp/g, " ")
      .replace(/→/g, "→");
  const col = (blocks: Block[]) =>
    blocks
      .map((b) => {
        if (b.kind === "p" || b.kind === "bibl") return strip(b.html);
        if (b.kind === "figure") return `[Abb. ${b.figure.caption}]`;
        return "";
      })
      .filter(Boolean)
      .join("\n\n");
  return [
    `Der Große Brockhaus (1929), Bd. 2, S. ${page.printed}`,
    `${page.headerLeft} — ${page.headerRight}`,
    "",
    col(page.left),
    "",
    col(page.right),
    "",
    `[Kustos: ${page.catchword}]`,
  ].join("\n");
}
