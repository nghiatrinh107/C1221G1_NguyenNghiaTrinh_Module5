import { Component, OnInit } from '@angular/core';
import {contracts} from '../../data/contracts';
import {Contract} from '../../module/contract';
import {ContractService} from '../contract.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts: Contract [] = [];
  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.contracts = this.contractService.getAllContract();
    console.log(this.contracts);
  }

}
