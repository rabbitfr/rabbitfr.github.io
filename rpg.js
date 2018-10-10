define(['exports', 'kotlin', 'Phaser'], function (_, Kotlin, $module$Phaser) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var throwUPAE = Kotlin.throwUPAE;
  var numberToInt = Kotlin.numberToInt;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Scene = $module$Phaser.Scene;
  var Game = $module$Phaser.Game;
  MainScene.prototype = Object.create(Scene.prototype);
  MainScene.prototype.constructor = MainScene;
  function GameConfig(width, height, type, backgroundColor, parent, pixelArt, roundPixels, scene) {
    this.width = width;
    this.height = height;
    this.type = type;
    this.backgroundColor = backgroundColor;
    this.parent = parent;
    this.pixelArt = pixelArt;
    this.roundPixels = roundPixels;
    this.scene = scene;
  }
  GameConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameConfig',
    interfaces: []
  };
  function TilemapConfig(key, data, tileWidth, tileHeight, width, height, insertNull) {
    this.key_3zpf8e$_0 = key;
    this.data_if96k3$_0 = data;
    this.tileWidth_ensdt1$_0 = tileWidth;
    this.tileHeight_jehopu$_0 = tileHeight;
    this.width_67z66v$_0 = width;
    this.height_t4bpg0$_0 = height;
    this.insertNull_xnrxav$_0 = insertNull;
  }
  Object.defineProperty(TilemapConfig.prototype, 'key', {
    get: function () {
      return this.key_3zpf8e$_0;
    },
    set: function (key) {
      this.key_3zpf8e$_0 = key;
    }
  });
  Object.defineProperty(TilemapConfig.prototype, 'data', {
    get: function () {
      return this.data_if96k3$_0;
    },
    set: function (data) {
      this.data_if96k3$_0 = data;
    }
  });
  Object.defineProperty(TilemapConfig.prototype, 'tileWidth', {
    get: function () {
      return this.tileWidth_ensdt1$_0;
    },
    set: function (tileWidth) {
      this.tileWidth_ensdt1$_0 = tileWidth;
    }
  });
  Object.defineProperty(TilemapConfig.prototype, 'tileHeight', {
    get: function () {
      return this.tileHeight_jehopu$_0;
    },
    set: function (tileHeight) {
      this.tileHeight_jehopu$_0 = tileHeight;
    }
  });
  Object.defineProperty(TilemapConfig.prototype, 'width', {
    get: function () {
      return this.width_67z66v$_0;
    },
    set: function (width) {
      this.width_67z66v$_0 = width;
    }
  });
  Object.defineProperty(TilemapConfig.prototype, 'height', {
    get: function () {
      return this.height_t4bpg0$_0;
    },
    set: function (height) {
      this.height_t4bpg0$_0 = height;
    }
  });
  Object.defineProperty(TilemapConfig.prototype, 'insertNull', {
    get: function () {
      return this.insertNull_xnrxav$_0;
    },
    set: function (insertNull) {
      this.insertNull_xnrxav$_0 = insertNull;
    }
  });
  TilemapConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TilemapConfig',
    interfaces: []
  };
  function GraphicsStyles(lineStyle, fillStyle) {
    this.lineStyle_ooe7tl$_0 = lineStyle;
    this.fillStyle_i8t014$_0 = fillStyle;
  }
  Object.defineProperty(GraphicsStyles.prototype, 'lineStyle', {
    get: function () {
      return this.lineStyle_ooe7tl$_0;
    },
    set: function (lineStyle) {
      this.lineStyle_ooe7tl$_0 = lineStyle;
    }
  });
  Object.defineProperty(GraphicsStyles.prototype, 'fillStyle', {
    get: function () {
      return this.fillStyle_i8t014$_0;
    },
    set: function (fillStyle) {
      this.fillStyle_i8t014$_0 = fillStyle;
    }
  });
  GraphicsStyles.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GraphicsStyles',
    interfaces: []
  };
  function GraphicsLineStyle(width, color, alpha) {
    this.width_dg4mz9$_0 = width;
    this.color_42nz2w$_0 = color;
    this.alpha_32zqv1$_0 = alpha;
  }
  Object.defineProperty(GraphicsLineStyle.prototype, 'width', {
    get: function () {
      return this.width_dg4mz9$_0;
    },
    set: function (width) {
      this.width_dg4mz9$_0 = width;
    }
  });
  Object.defineProperty(GraphicsLineStyle.prototype, 'color', {
    get: function () {
      return this.color_42nz2w$_0;
    },
    set: function (color) {
      this.color_42nz2w$_0 = color;
    }
  });
  Object.defineProperty(GraphicsLineStyle.prototype, 'alpha', {
    get: function () {
      return this.alpha_32zqv1$_0;
    },
    set: function (alpha) {
      this.alpha_32zqv1$_0 = alpha;
    }
  });
  GraphicsLineStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GraphicsLineStyle',
    interfaces: []
  };
  function GraphicsFillStyle(color, alpha) {
    this.color_xjhq55$_0 = color;
    this.alpha_yj5yd0$_0 = alpha;
  }
  Object.defineProperty(GraphicsFillStyle.prototype, 'color', {
    get: function () {
      return this.color_xjhq55$_0;
    },
    set: function (color) {
      this.color_xjhq55$_0 = color;
    }
  });
  Object.defineProperty(GraphicsFillStyle.prototype, 'alpha', {
    get: function () {
      return this.alpha_yj5yd0$_0;
    },
    set: function (alpha) {
      this.alpha_yj5yd0$_0 = alpha;
    }
  });
  GraphicsFillStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GraphicsFillStyle',
    interfaces: []
  };
  function Dungeon(width, height) {
    this.width = width;
    this.height = height;
  }
  Dungeon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dungeon',
    interfaces: []
  };
  Dungeon.prototype.component1 = function () {
    return this.width;
  };
  Dungeon.prototype.component2 = function () {
    return this.height;
  };
  Dungeon.prototype.copy_tdonws$ = function (width, height) {
    return new Dungeon(width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Dungeon.prototype.toString = function () {
    return 'Dungeon(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  Dungeon.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Dungeon.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function MainScene() {
    this.map_7rqlsu$_0 = this.map_7rqlsu$_0;
    this.cursors_1f7at9$_0 = this.cursors_1f7at9$_0;
    this.player_jvpu6f$_0 = this.player_jvpu6f$_0;
    this.layer_8rjafd$_0 = this.layer_8rjafd$_0;
    this.lastMoveTime = 0;
    this.cam_7rk7uz$_0 = this.cam_7rk7uz$_0;
  }
  MainScene.prototype.preload = function () {
    this.load.image('wall', 'assets/wall.png');
    println('loaded wall tiles');
    this.load.image('floor', 'assets/floor.png');
    println('loaded floor tiles');
  };
  Object.defineProperty(MainScene.prototype, 'map_0', {
    get: function () {
      if (this.map_7rqlsu$_0 == null)
        return throwUPAE('map');
      return this.map_7rqlsu$_0;
    },
    set: function (map) {
      this.map_7rqlsu$_0 = map;
    }
  });
  Object.defineProperty(MainScene.prototype, 'cursors_0', {
    get: function () {
      if (this.cursors_1f7at9$_0 == null)
        return throwUPAE('cursors');
      return this.cursors_1f7at9$_0;
    },
    set: function (cursors) {
      this.cursors_1f7at9$_0 = cursors;
    }
  });
  Object.defineProperty(MainScene.prototype, 'player_0', {
    get: function () {
      if (this.player_jvpu6f$_0 == null)
        return throwUPAE('player');
      return this.player_jvpu6f$_0;
    },
    set: function (player) {
      this.player_jvpu6f$_0 = player;
    }
  });
  Object.defineProperty(MainScene.prototype, 'layer_0', {
    get: function () {
      if (this.layer_8rjafd$_0 == null)
        return throwUPAE('layer');
      return this.layer_8rjafd$_0;
    },
    set: function (layer) {
      this.layer_8rjafd$_0 = layer;
    }
  });
  Object.defineProperty(MainScene.prototype, 'cam_0', {
    get: function () {
      if (this.cam_7rk7uz$_0 == null)
        return throwUPAE('cam');
      return this.cam_7rk7uz$_0;
    },
    set: function (cam) {
      this.cam_7rk7uz$_0 = cam;
    }
  });
  MainScene.prototype.create = function () {
    this.add.text(50, 50, 'RPG Demo').setOrigin(0, 0).setShadow(1, 1, '#5588EE', 0, true, true);
    var dungeon = new Dungeon(200, 200);
    console.log(dungeon);
    this.map_0 = this.make.tilemap(new TilemapConfig('map', null, 32, 32, 100, 100, false));
    console.log(this.map_0);
    var $receiver = this.map_0.addTilesetImage('wall', 'wall', 32, 32, 0, 0);
    println('added wall tileset');
    var wallTileSet = $receiver;
    console.log(wallTileSet);
    var $receiver_0 = this.map_0.createBlankDynamicLayer('Layer 1', 'wall', void 0, void 0, void 0, void 0, 32, 32);
    println('created blank dynamic layer');
    this.layer_0 = $receiver_0;
    console.log('total tiles ' + this.layer_0.tilesTotal);
    this.layer_0.setScale(1);
    this.layer_0.fill(40);
    this.map_0.putTileAt(39, 0, 0);
    this.map_0.putTileAt(39, 20, 20);
    console.log(this.map_0);
    this.player_0 = this.add.ellipse(0, 0, 32, 32, 15583808, 1);
    this.player_0.x = this.map_0.tileToWorldX(10);
    this.player_0.y = this.map_0.tileToWorldY(10);
    console.log(this.player_0);
    this.cam_0 = this.cameras.main;
    this.cam_0.setBounds(0, 0, Kotlin.imul(numberToInt(this.layer_0.width), numberToInt(this.layer_0.scaleX)), Kotlin.imul(numberToInt(this.layer_0.height), numberToInt(this.layer_0.scaleY)));
    this.cam_0.scrollX = numberToInt(this.player_0.x) - numberToInt(this.cam_0.width) * 0.5;
    this.cam_0.scrollY = numberToInt(this.player_0.y) - numberToInt(this.cam_0.height) * 0.5;
    this.cursors_0 = this.input.keyboard.createCursorKeys();
  };
  MainScene.prototype.update = function (time, delta) {
    this.updatePlayerMovement_3p81yu$(time);
    var playerTileX = this.map_0.worldToTileX(this.player_0.x);
    var playerTileY = this.map_0.worldToTileY(this.player_0.y);
    var smoothFactor = 0.9;
    this.cam_0.scrollX = smoothFactor * numberToInt(this.cam_0.scrollX) + (1 - smoothFactor) * (numberToInt(this.player_0.x) - numberToInt(this.cam_0.width) * 0.5);
    this.cam_0.scrollY = smoothFactor * numberToInt(this.cam_0.scrollY) + (1 - smoothFactor) * (numberToInt(this.player_0.y) - numberToInt(this.cam_0.height) * 0.5);
  };
  MainScene.prototype.isTileOpenAt_z8e4lc$ = function (worldX, worldY) {
    return true;
  };
  MainScene.prototype.updatePlayerMovement_3p81yu$ = function (time) {
    var tw = Kotlin.imul(numberToInt(this.map_0.tileWidth), numberToInt(this.layer_0.scaleX));
    var th = Kotlin.imul(numberToInt(this.map_0.tileHeight), numberToInt(this.layer_0.scaleY));
    var repeatMoveDelay = 100;
    if (numberToInt(time) > (numberToInt(this.lastMoveTime) + repeatMoveDelay | 0)) {
      if (ensureNotNull(this.cursors_0.down).isDown) {
        if (this.isTileOpenAt_z8e4lc$(this.player_0.x, numberToInt(this.player_0.y) + th | 0)) {
          this.player_0.y = numberToInt(this.player_0.y) + th | 0;
          this.lastMoveTime = time;
        }
      }
       else if (ensureNotNull(this.cursors_0.up).isDown) {
        if (this.isTileOpenAt_z8e4lc$(this.player_0.x, numberToInt(this.player_0.y) - th | 0)) {
          this.player_0.y = numberToInt(this.player_0.y) - th | 0;
          this.lastMoveTime = time;
        }
      }
      if (ensureNotNull(this.cursors_0.left).isDown) {
        if (this.isTileOpenAt_z8e4lc$(numberToInt(this.player_0.x) - tw | 0, this.player_0.y)) {
          this.player_0.x = numberToInt(this.player_0.x) - tw | 0;
          this.lastMoveTime = time;
        }
      }
       else if (ensureNotNull(this.cursors_0.right).isDown) {
        if (this.isTileOpenAt_z8e4lc$(numberToInt(this.player_0.x) + tw | 0, this.player_0.y)) {
          this.player_0.x = numberToInt(this.player_0.x) + tw | 0;
          this.lastMoveTime = time;
        }
      }
    }
  };
  MainScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MainScene',
    interfaces: []
  };
  function MainScene_init(name, $this) {
    $this = $this || Object.create(MainScene.prototype);
    Scene.call($this, name);
    MainScene.call($this);
    return $this;
  }
  function MainScene_init_0(config, $this) {
    $this = $this || Object.create(MainScene.prototype);
    Scene.call($this, config);
    MainScene.call($this);
    return $this;
  }
  function main(args) {
    var config = new GameConfig(window.innerWidth, window.innerHeight, $module$Phaser.AUTO, '#2a2a55', 'gameDiv', true, false, MainScene_init('mainScene'));
    console.log(config);
    var game = new Game(config);
    console.log(game);
  }
  var package$rpg = _.rpg || (_.rpg = {});
  package$rpg.GameConfig = GameConfig;
  package$rpg.TilemapConfig = TilemapConfig;
  package$rpg.GraphicsStyles = GraphicsStyles;
  package$rpg.GraphicsLineStyle = GraphicsLineStyle;
  package$rpg.GraphicsFillStyle = GraphicsFillStyle;
  package$rpg.Dungeon = Dungeon;
  package$rpg.MainScene_init_61zpoe$ = MainScene_init;
  package$rpg.MainScene_init_lc5dwj$ = MainScene_init_0;
  package$rpg.MainScene = MainScene;
  package$rpg.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('rpg', _);
  return _;
});

//# sourceMappingURL=rpg.js.map
