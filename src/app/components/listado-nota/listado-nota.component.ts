import { Component, OnInit, ViewChild } from '@angular/core';
import { IngresoService } from 'src/app/services/ingreso.service';
import { MatPaginator } from '@angular/material/paginator';
import { Notas } from 'src/app/data/Notas';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-listado-nota',
  templateUrl: './listado-nota.component.html',
  styleUrls: ['./listado-nota.component.scss']
})
export class ListadoNotaComponent implements OnInit {
  notasList: Array<Notas> = new Array<Notas>();
  displayedColumns = ['id', 'nombre','notaprimerparcial','notasegundoparcial','notafinal'];
  dataSource = new MatTableDataSource<Notas>(this.notasList);
  pageSizeOptions = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(private formularioService: IngresoService) { }

  ngOnInit(): void {
    this.formularioService.getNotas().subscribe((data) => {
      if (data.notas.length > 0) {
        let notaTemp : Notas;
        this.notasList = new Array<Notas>();
        data.notas.forEach(element => {
          notaTemp = new Notas();
          notaTemp.id = element.id;
          notaTemp.nombre = element.nombre;
          notaTemp.notaprimerparcial = element.nota_parcial1;
          notaTemp.notasegundoparcial = element.nota_parcial2;
          notaTemp.notafinal = element.nota_final;
          this.notasList.push(notaTemp);
        });
      }
      this.dataSource.data = this.notasList;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
