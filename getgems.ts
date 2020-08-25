// 在此处添加您的代码
//% weight=100 color=#6699CC icon="\uf140" block="Getgems"
//% groups='["Tiles", "Display", "Sprite"]'
namespace  getgems{

    //%block
    //%group="Sprite"
    //%blockId=destoryAllOfKind block="destroy all of kind %kind=spritekind"
    export function destroyAllSpriteOfKind(spriteKind:number) {
        for (let targetSprite of sprites.allOfKind(spriteKind)) {
            targetSprite.destroy()
        }
    }

    let hpManagerSprites: Sprite[] = []
    const CUBICBIRD_HELPER_BLOCKS_SPRITE_HP_DATA_KEY = 'CUBICBIRD_HELPER_BLOCKS_SPRITE_HP_DATA_KEY'

    //%block
    //% blockId=cubicbirdlocationOf block="location of %sprite=variables_get(mySprite)"
    //% group="Tiles"
    export function locationOf(sprite:Sprite) :tiles.Location {
        return tiles.getTileLocation(tileColumnOfSprite(sprite), tileRowOfSprite(sprite))
    }

    //%block
    //% blockId=cubicbirdTileRowOfSprite block="tile row number of %sprite=variables_get(mySprite)"
    //% group="Tiles"
    export function tileRowOfSprite(sprite: Sprite): number {
        return getPositionIndex(sprite.y)
    }

    //%block
    //% blockId=cubicbirdTileColumnOfSprite block="tile column number of %sprite=variables_get(mySprite)"
    //% group="Tiles"
    export function tileColumnOfSprite(sprite: Sprite): number {
        return getPositionIndex(sprite.x)
    }

   

    //%block
    //% group="Tiles"
    export function getTileColumn(tile: tiles.Tile): number {
        return getPositionIndex(tile.x)
    }

    //%block
    //% blockId=cubicbirdtileisIndex block="is %tile=gamegettile of %index=colorindexpicker?"
    //%group="Tiles"
    export function tileIsIndex(tile: tiles.Tile, index: number): boolean {
        return tile.tileSet == index
    }

    function getPositionIndex(x: number) {
        return x >> game.currentScene().tileMap.scale
    }


    let barWidth = NaN;

    //%block
    //% blockId=cubicbirddisplayHitPointBar block="show %x percent of hp || on %sprite=variables_get(mySprite)"
    //% group="Display"
    export function displayHitPointBar(x: number, sprite:Sprite=null) {
        if (sprite != null) {
            displaySpriteHitPointBarImpl(sprite, x)
        } else {
            if (x <= 0) {
                barWidth = NaN;
            } else {
                barWidth = x / 5 * 6;
            }
            
            game.onShade(function () {
                if (barWidth) {
                    screen.fillRect(20, 110, 120, 4, 1)
                    screen.fillRect(20, 111, x / 5 * 6, 2, 3)
                }
            })
        }
        
    }

    function displaySpriteHitPointBarImpl(sprite: Sprite, x: number) {
        if (!hpManagerSprites.find(element => element === sprite)) {
            hpManagerSprites.push(sprite)
            sprite.onDestroyed(() => {
                hpManagerSprites.removeElement(sprite)
            })
        }
        sprite.data[CUBICBIRD_HELPER_BLOCKS_SPRITE_HP_DATA_KEY] = x
    }


    //%block
    //% blockId=cubicbirdCircleSpirteAt block="circle %sprite=variables_get(mySprite) at (%x, %y) with radius %radius at speed %velocity"
    //% velocity.shadow=spriteSpeedPicker
    //% group="Sprite"
    export function circleSpriteAt(sprite:Sprite, x:number, y:number, r:number, velocity:number) {
        sprite.x = x;
        sprite.y = y - r;
        sprite.data['currentRadius'] = 0;

        let interval = Math.PI * r * 1000/ velocity / 180 
        
        game.onUpdateInterval(interval, ()=>{
            
            let currentRadius = sprite.data['currentRadius'];
            
            sprite.vx = Math.cos(currentRadius) * velocity;
            sprite.vy = Math.sin(currentRadius) * velocity;

            sprite.data['currentRadius'] = currentRadius + Math.PI / 180
        })
    }



    //%block
    //% blockId=cubicbirdMoveSpriteTowardsOthersprite block="move %sprite=variables_get(mySprite) towards %otherSprite=variables_get(mySprite) || at velocity %veloctiy"
    //% group="Sprite"
    export function moveTowards(sprite:Sprite, otherSprite:Sprite, velocity:number=50) {
        let distance = Math.sqrt( Math.pow(sprite.x - otherSprite.x, 2) + Math.pow(sprite.y - otherSprite.y, 2) )
        sprite.vx = velocity * (otherSprite.x - sprite.x) / distance
        sprite.vy = velocity * (otherSprite.y - sprite.y) / distance
    }


    //%block
    //%blockId=cubicbirdSpriteDistance block="distance of %sprite=variables_get(mySprite) and %otherSprite=variables_get(otherSprite)"
    //%group="Sprite"
    export function distance(sprite:Sprite, otherSprite:Sprite) :number {
        return Math.sqrt(Math.pow(sprite.x - otherSprite.x, 2) + Math.pow(sprite.y - otherSprite.y, 2))
    }
    
    //%block
    //%group="Sprite"
    //%blockId=cubicbirdNearestSpriteOfKind block="nearest sprite of %kind=spritekind to %sprite=variables_get(mySprite)"
    export function nearestSpriteOfKind(kind:number,sprite:Sprite) :Sprite {
        let nearestDistance = 999999999;
        let result :Sprite= null

        for (let candidate of sprites.allOfKind(kind)) {
            let currentDistance = distance(sprite, candidate)
            if (currentDistance < nearestDistance) {
                nearestDistance = currentDistance
                result = candidate
            }
        }

        return result;
    } 

    game.onShade(function () {
        for (let hpManagedSprite of hpManagerSprites) {
            let hpPercentage = hpManagedSprite.data[CUBICBIRD_HELPER_BLOCKS_SPRITE_HP_DATA_KEY]

            if (hpPercentage > 0) {
                let height = hpManagedSprite.image.height
                let width = hpManagedSprite.image.width
                let barWidth = (width - 2) * hpPercentage/100

                screen.fillRect(hpManagedSprite.x - width / 2 + 1, hpManagedSprite.y - height / 2 - 2, width - 2, 1, 1)
                screen.fillRect(hpManagedSprite.x - width / 2 + 1, hpManagedSprite.y - height / 2 - 2, barWidth, 1, 2)
            }
        }
    })

}