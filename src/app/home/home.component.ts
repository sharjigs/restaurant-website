import { Component, OnInit } from "@angular/core";
import { Promotion } from "../shared/promotion";
import { Dish } from "../shared/dish";
import { PromotionService } from "../services/promotion.service";
import { DishService } from "../services/dish.service";
import { Leader } from "../shared/leader";
import { LeaderService } from "../services/leader.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService
  ) {}

  ngOnInit() {
    this.dishService.getFeaturedDish().subscribe((dish) => (this.dish = dish));
    this.promotionService
      .getFeaturedPromotion()
      .subscribe((promotion) => (this.promotion = promotion));
    this.leaderService
      .getFeaturedLeader()
      .subscribe((leader) => (this.leader = leader));
  }
}
